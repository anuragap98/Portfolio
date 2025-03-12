import { create } from "zustand";

type State = {
	currentTheme: string;
};

type Action = {
	updateTheme: (currentTheme: State["currentTheme"]) => void;
};

// Create your store, which includes both state and (optionally) actions
const useStore = create<State & Action>((set) => ({
	currentTheme: "",
	updateTheme: (currentTheme) => set(() => ({ currentTheme: currentTheme })),
}));

export default useStore;
