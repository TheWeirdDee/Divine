import { create } from "zustand"

export const useProjectStore = create((set) => ({
  hovered: null,
  mouseX: 0,
  mouseY: 0,
  setHovered: (p) => set({ hovered: p }),
  setMouse: (x, y) => set({ mouseX: x, mouseY: y }),
}))
