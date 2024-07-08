import { create } from "zustand";
import { type Question } from "../types";

interface State {
  questions: Question[],
  currentQuestion: number,
  fetchQuestions: (limit: number) => Promise<void>
}

export const useQuestionsStore = create<State>((set) => ({
  questions: [],
  currentQuestion: 0,
  fetchQuestions: async (limit: number) => {
    set(() => ({
      questions: [{
        "id": 1,
        "question": "¿Cuál es la salida de este código?",
        "code": "console.log(typeof NaN)",
        "answers": [
          "undefined",
          "NaN",
          "string",
          "number"
        ],
        "correctAnswer": 3
      },]
    }))
  }
}))


export const useQuestionsSelector = () => {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const fetchQuestions = useQuestionsStore(state => state.fetchQuestions)

  return {
    questions,
    currentQuestion,
    fetchQuestions
  }
}