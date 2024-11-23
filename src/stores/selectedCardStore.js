import { create } from "zustand";

const useSelectedCardStore = create((set) => ({
  // 전체 카드 데이터와 선택 상태를 저장하는 객체
  selectedCards: {}, // { cardId: { selectedSheets: [], selectedNewsCards: [] } } 형태로 저장
  selectedCardId: null, // 현재 선택된 카드의 ID

  setSelectedCard: (id) => set({ selectedCardId: id }),

  toggleSheetForCard: (cardId, sheet) =>
    set((state) => {
      const currentCard = state.selectedCards[cardId] || {
        selectedSheets: [],
        selectedNewsCards: [],
      };

      const exists = currentCard.selectedSheets.find((s) => s.id === sheet.id);

      return {
        selectedCards: {
          ...state.selectedCards,
          [cardId]: {
            ...currentCard,
            selectedSheets: exists
              ? currentCard.selectedSheets.filter((s) => s.id !== sheet.id)
              : [...currentCard.selectedSheets, sheet],
          },
        },
      };
    }),

  toggleNewsForCard: (cardId, news) =>
    set((state) => {
      const currentCard = state.selectedCards[cardId] || {
        selectedSheets: [],
        selectedNewsCards: [],
      };

      const exists = currentCard.selectedNewsCards.find(
        (n) => n.id === news.id
      );

      return {
        selectedCards: {
          ...state.selectedCards,
          [cardId]: {
            ...currentCard,
            selectedNewsCards: exists
              ? currentCard.selectedNewsCards.filter((n) => n.id !== news.id)
              : [...currentCard.selectedNewsCards, news],
          },
        },
      };
    }),
}));

export default useSelectedCardStore;
