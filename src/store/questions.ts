import { create } from "zustand";
import { type Question } from "../types";
import confetti from "canvas-confetti";
import { persist } from "zustand/middleware";
import { getAllQuestions } from "../services/questions";

export const STEPS = {
  next: 1,
  previous: -1
}

export type STEPS_TYPE = keyof typeof STEPS

interface State {
  questions: Question[],
  currentQuestion: number,
  fetchQuestions: (limit: number) => Promise<void>,
  selectAnswer: (questionId: number, answer: number, updatePuntuation: () => void) => void,
  changeQuestion: (action: STEPS_TYPE) => void;
  clearQuestions: () => void
}

export const questionsStore = create<State>()(persist((set, get) => ({
  questions: [],
  currentQuestion: 1,
  fetchQuestions: async (limit: number) => {
    const questions = await getAllQuestions(limit)
    set({ questions })
  },
  selectAnswer: (questionId, answer, updatePuntuation) => {
    const copy = structuredClone(get().questions)
    const questionIndex = copy.findIndex(q => q.id === questionId)

    if (questionIndex === -1) return;

    const questionInfo = copy[questionIndex];
    const isCorrectUserAnswer = questionInfo.correctAnswer === answer;
    if (isCorrectUserAnswer) {
      updatePuntuation();
      confetti();
    }

    copy[questionIndex] = {
      ...questionInfo,
      userSelectedAnswer: answer,
      isCorrectUserAnswer
    }

    set({ questions: copy })
  },
  changeQuestion: (action: STEPS_TYPE) => {
    const { currentQuestion, questions } = get();

    const newQuestion = currentQuestion + STEPS[action]

    if (newQuestion < 1) return;
    if (newQuestion > questions.length) return;

    set({ currentQuestion: newQuestion })
  },
  clearQuestions: () => set({ questions: [], currentQuestion: 1 })
}), {
  name: 'questions'
}))


export const useQuestionsSelector = () => {
  const questions = questionsStore(state => state.questions)
  const currentQuestion = questionsStore(state => state.currentQuestion)
  const fetchQuestions = questionsStore(state => state.fetchQuestions)
  const selectAnswer = questionsStore(state => state.selectAnswer)
  const changeQuestion = questionsStore(state => state.changeQuestion)
  const clearQuestions = questionsStore(state => state.clearQuestions)

  return {
    questions,
    currentQuestion,
    fetchQuestions,
    selectAnswer,
    changeQuestion,
    clearQuestions
  }
}