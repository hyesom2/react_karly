import { create } from "zustand";

type Store = {
  show: boolean,
}

type Actions = {
  setShow: () => void;
}

const bannerStore = create<Store & Actions>()((set) => ({
  show: true,
  setShow: () => set((state) => ({show: !state.show}))
}));

export default bannerStore;