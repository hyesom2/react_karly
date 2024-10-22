import { create } from "zustand";

type Store = {
  show: boolean,
}

type Actions = {
  setShow: () => void;
}

const menuStore = create<Store&Actions>()((set) => ({
  show: false,
  setShow: () => set((state) => ({ show: !state.show })),
}));

export default menuStore;