// src/stores/titleStore.js
import { create } from "zustand";

const useTitleStore = create((set) => ({
  title: localStorage.getItem("title") || "", // 로컬스토리지에서 초기값 가져오기
  setTitle: (newTitle) => {
    set({ title: newTitle });
    localStorage.setItem("title", newTitle); // 로컬스토리지에 저장
  },
}));

export default useTitleStore;
