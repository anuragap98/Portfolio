// lib/theme.store.ts
import { create } from "zustand";

type ThemeState = {
	theme: "light" | "dark";
	setTheme: (theme: "light" | "dark") => void;
	hydrate: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
	theme: "light",
	setTheme: (theme) => {
		if (typeof window !== "undefined") {
			localStorage.setItem("theme", theme);
			document.documentElement.className = theme;
		}
		set({ theme });
	},
	hydrate: () => {
		if (typeof window !== "undefined") {
			const savedTheme =
				(localStorage.getItem("theme") as ThemeState["theme"]) || "light";
			document.documentElement.className = savedTheme;
			set({ theme: savedTheme });
		}
	},
}));
