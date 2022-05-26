import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "",
    pass: "",
  },
});

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
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
