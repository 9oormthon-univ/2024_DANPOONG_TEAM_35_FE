import { create } from "zustand";

const useLetterStore = create((set) => ({
  clickedLetterId: null,

  setClickedLetter: (id) => set({ clickedLetterId: id }),
  clearClickedLetter: () => set({ clickedLetterId: null }),
}));

export default useLetterStore;
