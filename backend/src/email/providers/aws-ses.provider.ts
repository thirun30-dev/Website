import { SESClient, SendRawEmailCommand } from '@aws-sdk/client-ses';
import { EmailProvider } from '../email-provider.interface';
import { Logger } from '@nestjs/common';

export function wrapBase64(base64: string, lineLength = 76): string {
  return base64.replace(new RegExp(`.{1,${lineLength}}`, 'g'), '$&\r\n').trim();
}

export class AwsSesProvider implements EmailProvider {
  private client: SESClient;
  private fromEmail: string;
  private readonly logger = new Logger('AwsSesProvider');

  constructor(config: { accessKeyId: string; secretAccessKey: string; region: string; fromEmail: string }) {
    this.client = new SESClient({
      region: config.region,
      credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      },
    });
    this.fromEmail = config.fromEmail;
  }

  private wrapBase64(base64: string, lineLength = 76): string {
    return wrapBase64(base64, lineLength);
  }

  async sendEmail(to: string, subject: string, htmlContent: string, qrCodeBuffer?: Buffer, cid?: string): Promise<void> {
    this.logger.log(`[EMAIL] [DIAGNOSTICS] Attempting to send email to ${to} using AWS SES`);

    // Extract name and registration code for text fallback
    const nameMatch = htmlContent.match(/Hello\s+([^,<]+)/i);
    const name = nameMatch ? nameMatch[1].trim() : 'Participant';
    const codeMatch = subject.match(/-\s*([A-Za-z0-9-]+)$/) || htmlContent.match(/font-family:\s*'Courier New'[^>]*>([^<]+)</i);
    const code = codeMatch ? codeMatch[1].trim() : 'PASS';

    const textContent = `Hello ${name},

Your registration for the AWS Community Day REC 2026 has been successfully confirmed! We are excited to have you join us for an inspiring day of cloud learning, networking, and expert sessions.

Event Details:
📅 Date: Saturday, September 12, 2026
⏰ Time: 09:00 AM onwards (IST)
📍 Venue: Rajalakshmi Engineering College (REC), Tech Hall, Chennai

Your Digital Entry Pass Code: ${code}

Please present the attached QR code (qr-code.png) at the reception desk.

Important Instructions:
1. Gate Access: Keep this QR code handy for entry clearance at the gates.
2. Goodies Claim: This QR code is required at the swags counter to collect your goodies.
3. Timeliness: Please arrive by 08:30 AM for registration and networking.

Have questions or need assistance? Reach out to our organizing committee at organizer@awscommunityday.com.

© 2026 AWS Student Builder Groups REC. All rights reserved.`;

    if (!qrCodeBuffer) {
      const alternativeBoundary = 'boundary-aws-community-day-alternative';
      const rawMessage = [
        `From: ${this.fromEmail}`,
        `To: ${to}`,
        `Subject: ${subject}`,
        `MIME-Version: 1.0`,
        `Content-Type: multipart/alternative; boundary="${alternativeBoundary}"`,
        ``,
        `--${alternativeBoundary}`,
        `Content-Type: text/plain; charset=UTF-8`,
        `Content-Transfer-Encoding: 7bit`,
        ``,
        textContent,
        ``,
        `--${alternativeBoundary}`,
        `Content-Type: text/html; charset=UTF-8`,
        `Content-Transfer-Encoding: 7bit`,
        ``,
        htmlContent,
        ``,
        `--${alternativeBoundary}--`,
      ].join('\r\n');

      try {
        await this.client.send(
          new SendRawEmailCommand({
            RawMessage: {
              Data: Buffer.from(rawMessage),
            },
          }),
        );
        this.logger.log(`[EMAIL] [DIAGNOSTICS] Email successfully delivered to ${to} via AWS SES (no attachments)`);
      } catch (error: any) {
        this.logger.error(`[EMAIL] [DIAGNOSTICS] Email delivery failed for ${to} via AWS SES: ${error.message}`);
        throw error;
      }
      return;
    }

    // MIME structure: multipart/mixed containing multipart/alternative containing text/plain and multipart/related
    const mixedBoundary = 'boundary-aws-community-day-mixed';
    const alternativeBoundary = 'boundary-aws-community-day-alternative';
    const relatedBoundary = 'boundary-aws-community-day-related';

    const rawMessage = [
      `From: ${this.fromEmail}`,
      `To: ${to}`,
      `Subject: ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/mixed; boundary="${mixedBoundary}"`,
      ``,
      `--${mixedBoundary}`,
      `Content-Type: multipart/alternative; boundary="${alternativeBoundary}"`,
      ``,
      `--${alternativeBoundary}`,
      `Content-Type: text/plain; charset=UTF-8`,
      `Content-Transfer-Encoding: 7bit`,
      ``,
      textContent,
      ``,
      `--${alternativeBoundary}`,
      `Content-Type: multipart/related; boundary="${relatedBoundary}"`,
      ``,
      `--${relatedBoundary}`,
      `Content-Type: text/html; charset=UTF-8`,
      `Content-Transfer-Encoding: 7bit`,
      ``,
      htmlContent,
      ``,
      `--${relatedBoundary}`,
      `Content-Type: image/png; name="qr-code.png"`,
      `Content-Transfer-Encoding: base64`,
      `Content-Disposition: inline; filename="qr-code.png"`,
      `Content-ID: <${cid || 'qrcode'}>`,
      ``,
      this.wrapBase64(qrCodeBuffer.toString('base64')),
      ``,
      `--${relatedBoundary}--`,
      ``,
      `--${alternativeBoundary}--`,
      ``,
      `--${mixedBoundary}--`,
    ].join('\r\n');

    try {
      await this.client.send(
        new SendRawEmailCommand({
          RawMessage: {
            Data: Buffer.from(rawMessage),
          },
        }),
      );
      this.logger.log(`[EMAIL] [DIAGNOSTICS] Email successfully delivered to ${to} via AWS SES (standard MIME nesting)`);
    } catch (error: any) {
      this.logger.error(`[EMAIL] [DIAGNOSTICS] Email delivery failed for ${to} via AWS SES: ${error.message}`);
      throw error;
    }
  }
}
