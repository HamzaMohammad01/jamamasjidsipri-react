/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				text: {
					0: "#fff",
					50: "#f3f4f1",
					100: "#e7e9e2",
					200: "#ced2c6",
					300: "#b6bca9",
					400: "#9da58d",
					500: "#858f70",
					600: "#6a725a",
					700: "#505643",
					800: "#35392d",
					900: "#1b1d16",
					950: "#0d0e0b",
				},
				primary: "#ffffff",
				secondary: "#ffffff",
			},
			fontFamily: {
				primary: '"Monofett", sans-serif',
				secondary: '"Lexend Zetta", sans-serif',
			},
			screens: {
				xs: { max: "600px" },
				xl: { min: "1200px" },
			},
		},
	},
	daisyui: {
		themes: [
			{
				light: {
					primary: "#22C55E", // Custom primary color for light theme
					secondary: "#FF9800", // Custom secondary color for light theme
					accent: "#9C27B0", // Custom accent color for light theme
					neutral: "#f5f5f5", // Custom neutral color for light theme
					"base-100": "#ffffff", // Custom base color for light theme
					info: "#2196F3", // Custom info color for light theme
					success: "#8BC34A", // Custom success color for light theme
					warning: "#FFC107", // Custom warning color for light theme
					error: "#F44336", // Custom error color for light theme
				},
			},
			{
				dark: {
					primary: "#22C55E", // Custom primary color for dark theme
					secondary: "#03A9F4", // Custom secondary color for dark theme
					accent: "#00BCD4", // Custom accent color for dark theme
					neutral: "#2c2c2c", // Custom neutral color for dark theme
					"base-100": "#121212", // Custom base color for dark theme
					info: "#4CAF50", // Custom info color for dark theme
					success: "#8BC34A", // Custom success color for dark theme
					warning: "#FFEB3B", // Custom warning color for dark theme
					error: "#F44336", // Custom error color for dark theme
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
