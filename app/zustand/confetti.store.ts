import { create } from "zustand";

export type IConfettiDetails = {
  numberOfPieces: number;
  duration: "match-message" | number;
};

export const useConfettiStore = create<{
  confetti: IConfettiDetails | null;
  setConfetti: (confetti: IConfettiDetails) => void;
  unsetConfetti: () => void;
}>((set) => ({
  confetti: null,
  setConfetti: (confetti) => set({ confetti }),
  unsetConfetti: () =>
    set({
      confetti: null,
    }),
}));
