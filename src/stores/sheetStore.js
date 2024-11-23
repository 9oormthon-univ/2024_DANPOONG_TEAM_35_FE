import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSheetStore = create(
  persist(
    (set) => ({
      selectedSheets: [],

      addSelectedSheet: (sheet) =>
        set((state) => ({
          selectedSheets: [...state.selectedSheets, sheet],
        })),

      removeSelectedSheet: (id) =>
        set((state) => ({
          selectedSheets: state.selectedSheets.filter(
            (sheet) => sheet.id !== id
          ),
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
    }),
    {
      name: "sheet-storage",
      partialize: (state) => ({ selectedSheets: state.selectedSheets }),
    }
  )
);

export default useSheetStore;
