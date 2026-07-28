import * as nodemailer from 'nodemailer';
import { EmailProvider } from '../email-provider.interface';
import { Logger } from '@nestjs/common';

export class GmailProvider implements EmailProvider {
  private transporter: nodemailer.Transporter;
  private user: string;
  private readonly logger = new Logger('GmailProvider');

  constructor(config: { user: string; pass: string }) {
    this.user = config.user;
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });
  }

  async sendEmail(to: string, subject: string, htmlContent: string, qrCodeBuffer?: Buffer, cid?: string): Promise<void> {
    this.logger.log(`[EMAIL] [DIAGNOSTICS] Attempting to send email to ${to} using Gmail SMTP`);
    
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

    const mailOptions: nodemailer.SendMailOptions = {
      from: `"AWS Community Day REC 2026" <${this.user}>`,
      to,
      subject,
      text: textContent,
      html: htmlContent,
    };

    if (qrCodeBuffer) {
      mailOptions.attachments = [
        {
          filename: 'qr-code.png',
          content: qrCodeBuffer,
          contentType: 'image/png',
          cid: cid || 'qrcode',
          contentDisposition: 'inline',
        },
      ];
    }

    try {
      await this.transporter.sendMail(mailOptions);
      this.logger.log(`[EMAIL] [DIAGNOSTICS] Email successfully delivered to ${to} via Gmail SMTP`);
    } catch (error: any) {
      this.logger.error(`[EMAIL] [DIAGNOSTICS] Email delivery failed for ${to} via Gmail SMTP: ${error.message}`);
      throw error;
    }
  }
}
