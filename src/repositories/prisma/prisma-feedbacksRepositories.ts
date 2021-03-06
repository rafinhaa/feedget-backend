import { prisma } from "../../prisma";
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from "../feedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ comment, screenshot, type }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        comment,
        screenshot,
        type,
      },
    });
  }
}
