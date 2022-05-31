import { SubmitFeedbackUseCase } from "../submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("SubmitFeedbackUseCase", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "bug",
        comment: "bug description",
        screenshot: "data:image/png;base64,435645877433236",
      })
    ).resolves.not.toThrow();
    expect(createFeedbackSpy).toHaveBeenCalledTimes(1);
    expect(sendMailSpy).toHaveBeenCalledTimes(1);
  });

  it("should not be able to submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "bug description",
        screenshot: "data:image/png;base64,435645877433236",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "bug",
        comment: "",
        screenshot: "data:image/png;base64,435645877433236",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "bug",
        comment: "bug description",
        screenshot: "435645877433236.png",
      })
    ).rejects.toThrow();
  });
});
