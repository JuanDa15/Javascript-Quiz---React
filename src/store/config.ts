import { create } from "zustand"
import { persist } from "zustand/middleware"

interface State {
  totalQuestions: number,
  questionPuntuation: number,
  setConfig: (config: {
    totalQuestions?: number,
    questionPuntuation?: number,
  }) => void,
}

export const configStore = create<State>()(persist((set) => ({
  totalQuestions: 10,
  questionPuntuation: 10,
  setConfig: (config) => {
    set((state) => ({ ...state, ...config }))
  },
}), {
  name: 'config'
}))

export const useConfigSelector = () => {
  const totalQuestions = configStore(state => state.totalQuestions)
  const questionPuntuation = configStore(state => state.questionPuntuation)
  const setConfig = configStore(state => state.setConfig)

  const setTotalQuestions = (value: number) => {
    if (value < 1 || value > 49) return;
    setConfig({ totalQuestions: value })
  }

  const setQuestionPuntuation = (value: number) => {
    if (value < 1) return;
    setConfig({ questionPuntuation: value })
  }

  return {
    totalQuestions,
    questionPuntuation,
    setConfig,
    setTotalQuestions,
    setQuestionPuntuation
  }
}