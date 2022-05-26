import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "07cf92621d262c",
    pass: "deb58a126d7c76",
  },
});

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });
  await transport.sendMail({
    from: "Equipe FeedGet <oi@feedget.com>",
    to: "Rafael Rodrigues <rafael@abc.com.br",
    subject: "Feedback do usuário",
    text: "Um novo feedback foi recebido!",
    html: [
      `<h3>Novo feedback</h3>`,
      `<ul>`,
      `<li>Tipo: ${feedback.type}</li>`,
      `<li>Comentário: ${feedback.comment}</li>`,
      `<li>Screenshot: ${feedback.screenshot}</li>`,
      `</ul>`,
    ].join("\n"),
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("Server started on port 3333");
});
