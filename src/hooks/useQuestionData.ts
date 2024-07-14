import { useQuestionsSelector } from "../store/questions";

export const useQuestionsData = () => {
  const { questions } = useQuestionsSelector();

  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  questions.forEach(({ isCorrectUserAnswer }) => {
    if (isCorrectUserAnswer === undefined) unanswered++;
    else if (isCorrectUserAnswer) correct++;
    else incorrect++;
  });

  return {
    correct,
    incorrect,
    unanswered,
  };
};
