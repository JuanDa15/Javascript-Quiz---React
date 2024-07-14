import { Question } from "../types";

export const getOptionBackground = (question: Question, optionIndex: number) => {
  const { userSelectedAnswer = null, correctAnswer } = question;

  if (userSelectedAnswer === null) return '';

  if (optionIndex !== correctAnswer && optionIndex !== userSelectedAnswer)
    return '';

  if (optionIndex === correctAnswer) return 'success.main';

  if (optionIndex === userSelectedAnswer) return 'error.main';
};