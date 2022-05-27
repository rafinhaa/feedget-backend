import nodemailer from "nodemailer";
import { MailAdapter, sendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "",
    pass: "",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    await transport.sendMail({
      from: "Equipe FeedGet <oi@feedget.com>",
      to: "Rafael Rodrigues <rafael@abc.com.br",
      subject,
      html: body,
    });
  }
}
