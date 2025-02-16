// tailwind.config.ts
/** @type {import('tailwindcss').Config} */ // Important for v3/v4 type hinting
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // Adjust path to your components
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			colors: {},
		},
	},
	plugins: [],
};
