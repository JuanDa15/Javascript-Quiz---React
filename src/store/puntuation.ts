import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  puntuation: number;
  updatePuntuation: (puntuationValue: number) => void,
  resetPuntuation: () => void
}

export const puntuationStore = create<State>()(persist((set, get) => ({
  puntuation: 0,
  updatePuntuation: (puntuationValue) => {
    const { puntuation } = get()
    set({ puntuation: puntuation + puntuationValue })
  },
  resetPuntuation: () => set({ puntuation: 0 })
}), {
  name: 'puntuation'
}))

export const usePuntuationSelector = () => {
  const puntuation = puntuationStore(state => state.puntuation)
  const updatePuntuation = puntuationStore(state => state.updatePuntuation)
  const resetPuntuation = puntuationStore(state => state.resetPuntuation)

  return {
    puntuation,
    updatePuntuation,
    resetPuntuation
  }
}