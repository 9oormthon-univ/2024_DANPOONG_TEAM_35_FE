import { create } from "zustand";

const useSheetStore = create((set) => ({
  selectedSheets: [],

  addSelectedSheet: (sheet) =>
    set((state) => ({
      selectedSheets: [...state.selectedSheets, sheet],
    })),

  removeSelectedSheet: (id) =>
    set((state) => ({
      selectedSheets: state.selectedSheets.filter((sheet) => sheet.id !== id),
    })),

  toggleSelectedSheet: (sheet) =>
    set((state) => {
      const exists = state.selectedSheets.find(
        (selected) => selected.id === sheet.id
      );
      return {
        selectedSheets: exists
          ? state.selectedSheets.filter((s) => s.id !== sheet.id)
          : [...state.selectedSheets, sheet],
      };
    }),
}));

export default useSheetStore;
