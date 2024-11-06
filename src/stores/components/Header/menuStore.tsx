import { create } from "zustand";

type Store = {
  show: boolean;
  hover: boolean;
  tooltipShow: boolean;
}

type Actions = {
  setShow: () => void;
  setHover: () => void;
  setTooltipShow: (value: boolean) => void;
}

const menuStore = create<Store&Actions>()((set) => ({
  show: false,
  setShow: () => set((state) => ({ show: !state.show })),
  hover: false,
  setHover: () => set((state) => ({ hover: !state.hover })),
  tooltipShow: false,
  setTooltipShow: (value) => set({ tooltipShow: value }),
}));

export default menuStore;