import { create } from "zustand";
import { persist } from "zustand/middleware";

const useNewsStore = create(
  persist(
    (set) => ({
      selectedNewsCards: [],

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
    }),
    {
      name: "news-storage",
      partialize: (state) => ({ selectedNewsCards: state.selectedNewsCards }),
    }
  )
);

export default useNewsStore;
