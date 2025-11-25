import { create } from "zustand";

interface ChatStoreType {
  open: boolean;
  setOpen: (state: boolean) => void;
}

export const useChatStore = create<ChatStoreType>((set) => ({
  open: false,
  setOpen: (state) => set({ open: state }),
}));
