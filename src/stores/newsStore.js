import { create } from "zustand";

const useNewsCardStore = create((set) => ({
  selectedNewsCards: [],

  addSelectedNewsCard: (card) =>
    set((state) => ({
      selectedNewsCards: [...state.selectedNewsCards, card],
    })),

  removeSelectedNewsCard: (id) =>
    set((state) => ({
      selectedNewsCards: state.selectedNewsCards.filter(
        (card) => card.id !== id
      ),
    })),

  toggleSelectedNewsCard: (card) =>
    set((state) => {
      const exists = state.selectedNewsCards.find(
        (selected) => selected.id === card.id
      );
      return {
        selectedNewsCards: exists
          ? state.selectedNewsCards.filter((s) => s.id !== card.id)
          : [...state.selectedNewsCards, card],
      };
    }),
}));

export default useNewsCardStore;
