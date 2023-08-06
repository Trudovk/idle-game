import { create } from "zustand";

const upgrades = ["grandma", "cursor", "farm"] as const;
type Upgrade = {
  count: number;
  price: number;
};

type GameStoreType = {
  //   selectedTheme: "dark" | "light" | "system";
  //   setSelectedTheme: (theme: "dark" | "light" | "system") => void;

  count: number;
  clickPower: number;
  upgrades: { [key in (typeof upgrades)[number]]: Upgrade };
  addToCount: (n: number) => void;
  setClickPower: (n: number) => void;
  setUpgradePrice: (n: number) => void;
};

export const useGameStore = create<GameStoreType>()((set) => ({
  //   currentScreen: "encyclopedia",
  //   selectedTheme: "system",
  //   setSelectedTheme: (theme: "dark" | "light" | "system") =>
  //     set((s) => ({ ...s, selectedTheme: theme })),
  count: 0,
  clickPower: 1,
  addToCount: (n) => set((s) => ({ ...s, count: s.count + n })),
  setClickPower: (n) => set((s) => ({ ...s, clickPower: n })),
  setUpgradePrice: (n) => set((s) => ({ ...s })),
}));
