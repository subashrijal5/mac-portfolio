import { StateCreator } from "zustand";

export interface DesktopSlice {
  showApps: {
    [key: string]: boolean;
  };
  appsZ: {
    [key: string]: number;
  };
  maxApps: {
    [key: string]: boolean;
  };
  minApps: {
    [key: string]: boolean;
  };
  maxZ: number;
  showLaunchpad: boolean;
  currentTitle: string;
  hideDockAndTopbar: boolean;
  spotlight: boolean;
  setShowApps: (v: { [key: string]: boolean }) => void;
  toggleLaunchpad: (target: boolean) => void;
}

export const createDockSlice: StateCreator<DesktopSlice> = (set) => ({
  showApps: {},
  appsZ: {},
  maxApps: {},
  minApps: {},
  maxZ: 2,
  showLaunchpad: false,
  currentTitle: "Finder",
  hideDockAndTopbar: false,
  spotlight: false,
  setShowApps: (v) => set(() => ({ showApps: v })),
  toggleLaunchpad: (target) => ({
    showLunchPad: target
  })
});
