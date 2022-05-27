import { MailAdapter } from "../adapters/mailAdapter";
import { FeedbacksRepository } from "../repositories/feedbacksRepository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({ type, comment, screenshot });
    await this.mailAdapter.sendMail({
      subject: "Feedback do usuário",
      body: [
        `<h3>Novo feedback</h3>`,
        `<ul>`,
        `<li>Tipo: ${type}</li>`,
        `<li>Comentário: ${comment}</li>`,
        `<li>Screenshot: ${screenshot}</li>`,
        `</ul>`,
      ].join("\n"),
    });
  }
}
