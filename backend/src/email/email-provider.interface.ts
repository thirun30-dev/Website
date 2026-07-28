export interface EmailProvider {
  sendEmail(to: string, subject: string, htmlContent: string, qrCodeBuffer?: Buffer, cid?: string): Promise<void>;
}
