import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { ActivityLogService } from '../activity-log/activity-log.service';
import { AwsSesProvider } from './providers/aws-ses.provider';
import { GmailProvider } from './providers/gmail.provider';
import { EmailProvider } from './email-provider.interface';
import { ActivityType } from '@prisma/client';

@Injectable()
export class EmailService implements OnModuleInit {
  private awsProvider: EmailProvider | null = null;
  private gmailProvider: EmailProvider | null = null;
  private readonly logger = new Logger('EmailService');

  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
    private activityLogService: ActivityLogService,
  ) {
    const awsAccessKey = this.configService.get<string>('AWS_ACCESS_KEY_ID');
    const awsSecretKey = this.configService.get<string>('AWS_SECRET_ACCESS_KEY');
    const awsRegion = this.configService.get<string>('AWS_REGION');
    const awsFromEmail = this.configService.get<string>('AWS_SES_FROM_EMAIL');

    const gmailUser = this.configService.get<string>('GMAIL_USER');
    const gmailAppPassword = this.configService.get<string>('GMAIL_APP_PASSWORD');

    // Startup validation only checks for configuration presence (doesn't perform live connection checks)
    if (awsAccessKey && awsSecretKey && awsRegion && awsFromEmail) {
      this.awsProvider = new AwsSesProvider({
        accessKeyId: awsAccessKey,
        secretAccessKey: awsSecretKey,
        region: awsRegion,
        fromEmail: awsFromEmail,
      });
    }

    if (gmailUser && gmailAppPassword) {
      this.gmailProvider = new GmailProvider({
        user: gmailUser,
        pass: gmailAppPassword,
      });
    }
  }

  onModuleInit() {
    const hasAws = !!this.awsProvider;
    const hasGmail = !!this.gmailProvider;

    if (hasAws && hasGmail) {
      console.log('[EMAIL] AWS SES Available');
      console.log('[EMAIL] Gmail SMTP Available');
      console.log('[EMAIL] Email Fallback Chain Ready');
      this.logger.log('AWS SES and Gmail SMTP fallback chain is ready.');
    } else if (hasAws && !hasGmail) {
      console.log('[EMAIL] AWS SES Available');
      console.log('[EMAIL] WARNING: Gmail fallback unavailable');
      this.logger.warn('AWS SES is configured but Gmail fallback is unavailable.');
    } else if (!hasAws && hasGmail) {
      console.log('[EMAIL] WARNING: AWS SES unavailable');
      console.log('[EMAIL] Gmail SMTP running as emergency provider');
      this.logger.warn('AWS SES is unavailable; Gmail SMTP will run as emergency provider.');
    } else {
      console.log('[EMAIL] NOTICE: Neither AWS SES nor Gmail SMTP configured. Running in Mock Console Mode for local dev.');
      this.logger.warn('No external email provider configured. Emails will be logged to console in mock mode.');
    }
  }

  isAwsConfigured(): boolean {
    return !!this.awsProvider;
  }

  isGmailConfigured(): boolean {
    return !!this.gmailProvider;
  }

  async sendEmail(to: string, subject: string, htmlContent: string, qrCodeBuffer?: Buffer, cid?: string): Promise<void> {
    if (this.awsProvider) {
      try {
        await this.awsProvider.sendEmail(to, subject, htmlContent, qrCodeBuffer, cid);
        return;
      } catch (err) {
        this.logger.warn(`AWS SES delivery failed, trying Gmail SMTP: ${err.message}`);
      }
    }
    if (this.gmailProvider) {
      await this.gmailProvider.sendEmail(to, subject, htmlContent, qrCodeBuffer, cid);
      return;
    }
    this.logger.log(`[Mock Email Sent] To: ${to} | Subject: ${subject}`);
  }

  async sendRegistrationEmail(
    userId: string,
    name: string,
    email: string,
    registrationCode: string,
    qrCodeBuffer: Buffer,
  ): Promise<void> {
    const subject = `Your AWS Community Day REC 2026 Entry Pass - ${registrationCode}`;
    const cid = `qr-${registrationCode}@awscommunityday.rec`;
    const htmlContent = this.getRegistrationEmailHtml(name, registrationCode, cid);
    const now = new Date();

    const registration = await this.prisma.registration.findUnique({
      where: { userId },
    });

    if (!registration) {
      throw new Error(`Registration record not found for user ID: ${userId}`);
    }

    // Phase 1: Attempt AWS SES
    if (this.awsProvider) {
      try {
        this.logger.log(`[EMAIL] Attempting AWS SES dispatch to: ${email}`);
        await this.awsProvider.sendEmail(email, subject, htmlContent, qrCodeBuffer, cid);

        // Success Update
        await this.prisma.registration.update({
          where: { id: registration.id },
          data: {
            emailStatus: 'SENT',
            emailProvider: 'AWS_SES',
            emailSentAt: now,
            lastEmailAttemptAt: now,
            lastEmailError: null,
          },
        });

        // Audit Logs (does not overwrite delivery history - each attempt gets a new log)
        await this.activityLogService.log(
          'EMAIL_SENT_SES' as ActivityType,
          userId,
          { provider: 'AWS_SES', recipient: email, timestamp: now },
        );
        return;
      } catch (error: any) {
        this.logger.error(`[EMAIL] AWS SES delivery failed for ${email}: ${error.message}`);
        
        await this.activityLogService.log(
          'EMAIL_FAILED_SES' as ActivityType,
          userId,
          { provider: 'AWS_SES', recipient: email, errorMessage: error.message, timestamp: now },
        );
      }
    } else {
      this.logger.warn(`[EMAIL] AWS SES not configured, skipping to fallback.`);
    }

    // Phase 2: Attempt Gmail SMTP Fallback
    if (this.gmailProvider) {
      try {
        this.logger.log(`[EMAIL] Attempting Gmail SMTP Fallback dispatch to: ${email}`);
        await this.gmailProvider.sendEmail(email, subject, htmlContent, qrCodeBuffer, cid);

        // Success Fallback Update
        await this.prisma.registration.update({
          where: { id: registration.id },
          data: {
            emailStatus: 'SENT',
            emailProvider: 'GMAIL_FALLBACK',
            emailSentAt: now,
            lastEmailAttemptAt: now,
            lastEmailError: null,
          },
        });

        await this.activityLogService.log(
          'EMAIL_FALLBACK_SUCCESS' as ActivityType,
          userId,
          { provider: 'GMAIL_FALLBACK', recipient: email, timestamp: now },
        );

        await this.activityLogService.log(
          'EMAIL_SENT_GMAIL' as ActivityType,
          userId,
          { provider: 'GMAIL_FALLBACK', recipient: email, timestamp: now },
        );
        return;
      } catch (error: any) {
        this.logger.error(`[EMAIL] Gmail SMTP fallback failed for ${email}: ${error.message}`);

        await this.prisma.registration.update({
          where: { id: registration.id },
          data: {
            emailStatus: 'FAILED',
            lastEmailAttemptAt: now,
            lastEmailError: error.message,
          },
        });

        await this.activityLogService.log(
          'EMAIL_FAILED_GMAIL' as ActivityType,
          userId,
          { provider: 'GMAIL_FALLBACK', recipient: email, errorMessage: error.message, timestamp: now },
        );
        throw error;
      }
    } else {
      // Mock mode fallback for local dev when no SMTP is configured
      this.logger.log(`[EMAIL] Mock Email Dispatch to: ${email} | Code: ${registrationCode}`);
      await this.prisma.registration.update({
        where: { id: registration.id },
        data: {
          emailStatus: 'SENT',
          emailProvider: 'DEV_MOCK',
          emailSentAt: now,
          lastEmailAttemptAt: now,
          lastEmailError: null,
        },
      });
      await this.activityLogService.log(
        'EMAIL_SENT_GMAIL' as ActivityType,
        userId,
        { provider: 'DEV_MOCK', recipient: email, timestamp: now },
      );
      return;
    }
  }

  private getRegistrationEmailHtml(name: string, code: string, cid: string): string {
    return getRegistrationEmailHtml(name, code, cid);
  }
}

export function getRegistrationEmailHtml(name: string, code: string, cid: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your AWS Community Day REC 2026 Entry Pass</title>
        <style>
          body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
          table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
          img { -ms-interpolation-mode: bicubic; }
        </style>
      </head>
      <body style="margin: 0; padding: 0; width: 100% !important; background-color: #020205; color: #cbd5e1; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #020205; width: 100%;">
          <tr>
            <td align="center" style="padding: 20px 0;">
              <!-- Container Table -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #070712; border: 1px solid #00f0ff; border-radius: 16px; border-collapse: separate; overflow: hidden;">
                
                <!-- Header -->
                <tr>
                  <td align="center" style="background-color: #0070f3; background: linear-gradient(135deg, #0070f3 0%, #00f0ff 100%); padding: 40px 30px; border-bottom: 1px solid rgba(0, 240, 255, 0.15);">
                    <h1 style="margin: 0; font-size: 26px; color: #ffffff; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase;">AWS Community Day</h1>
                    <p style="margin: 8px 0 0 0; color: #e2e8f0; font-size: 14px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">AWS Student Builder Groups REC</p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding: 40px 35px;">
                    <div style="font-size: 20px; color: #ffffff; font-weight: 700; margin-bottom: 16px;">Hello ${name},</div>
                    <p style="font-size: 15px; margin: 0 0 24px 0; color: #cbd5e1; line-height: 1.6;">
                      Your registration for the <strong>AWS Community Day REC 2026</strong> has been successfully confirmed! We are excited to have you join us for an inspiring day of cloud learning, networking, and expert sessions.
                    </p>

                    <!-- Pass Card Table -->
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #04040a; border: 1px dashed rgba(0, 240, 255, 0.3); border-radius: 12px; margin: 30px 0; border-collapse: separate;">
                      <tr>
                        <td align="center" style="padding: 30px;">
                          <h2 style="margin: 0 0 8px 0; color: #00f0ff; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px;">Your Digital Entry Pass</h2>
                          <div style="font-family: 'Courier New', Courier, monospace; font-size: 32px; font-weight: 800; color: #ffffff; letter-spacing: 4px; margin: 10px 0;">${code}</div>
                          
                          <!-- QR Code Table -->
                          <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="margin: 20px auto 10px auto; background-color: #ffffff; border-radius: 12px; border-collapse: separate;">
                            <tr>
                              <td align="center" style="padding: 16px;">
                                <img src="cid:${cid}" alt="Event QR Entry Pass" width="200" height="200" style="display: block; border: 0; outline: none; text-decoration: none; width: 200px; height: 200px;">
                              </td>
                            </tr>
                          </table>

                          <p style="font-size: 11px; color: #94a3b8; margin: 10px 0 0 0; line-height: 1.4;">Present this QR code (also attached as qr-code.png) at the reception desk.</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Event Details List as a Table -->
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 30px 0; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 6px 0; font-size: 14px; color: #cbd5e1;">
                          <span style="font-size: 16px; margin-right: 8px;">📅</span> <strong style="color: #00f0ff;">Date:</strong> Saturday, September 12, 2026
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-size: 14px; color: #cbd5e1;">
                          <span style="font-size: 16px; margin-right: 8px;">⏰</span> <strong style="color: #00f0ff;">Time:</strong> 09:00 AM onwards (IST)
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-size: 14px; color: #cbd5e1;">
                          <span style="font-size: 16px; margin-right: 8px;">📍</span> <strong style="color: #00f0ff;">Venue:</strong> Rajalakshmi Engineering College (REC), Tech Hall, Chennai
                        </td>
                      </tr>
                    </table>

                    <!-- Instructions Box Table -->
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: rgba(30, 41, 59, 0.5); border-left: 4px solid #00f0ff; border-radius: 0 12px 12px 0; margin-top: 30px; border-collapse: separate;">
                      <tr>
                        <td style="padding: 20px;">
                          <h4 style="margin: 0 0 8px 0; color: #ffffff; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Important Instructions</h4>
                          <p style="margin: 0; font-size: 13px; color: #94a3b8; line-height: 1.5;">
                            1. <strong>Gate Access:</strong> Keep this QR code handy for entry clearance at the gates.
                            <br>2. <strong>Goodies Claim:</strong> This QR code is required at the swags counter to collect your goodies.
                            <br>3. <strong>Timeliness:</strong> Please arrive by 08:30 AM for registration and networking.
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Contact Section -->
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 35px; padding-top: 25px; border-top: 1px solid rgba(255, 255, 255, 0.05); border-collapse: collapse;">
                      <tr>
                        <td style="font-size: 13px; color: #94a3b8; line-height: 1.5;">
                          Have questions or need assistance? Feel free to reach out to our organizing committee at <a href="mailto:organizer@awscommunityday.com" style="color: #00f0ff; text-decoration: none;">organizer@awscommunityday.com</a>.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td align="center" style="background-color: #04060c; padding: 25px; border-top: 1px solid rgba(0, 240, 255, 0.1); font-size: 12px; color: #64748b;">
                    <p style="margin: 0 0 6px 0; line-height: 1.4;">© 2026 AWS Student Builder Groups REC. All rights reserved.</p>
                    <p style="margin: 0; line-height: 1.4;">This is an auto-generated confirmation. Please do not reply directly to this email.</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}
