import { create } from "zustand";

interface ConnectionType {
  connected: boolean;
  setConnection: (status: boolean) => void;
}
export const useConnectionStore = create<ConnectionType>((set) => ({
  connected: true,
  setConnection: (status) => set({ connected: status }),
}));
