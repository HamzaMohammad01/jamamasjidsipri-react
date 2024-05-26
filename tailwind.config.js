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
				mytheme: {
					primary: "#22C55E",
					neutral: "#1c1e19",
					"base-100": "#fffeff",
					info: "#008cc1",
					success: "#009300",
					warning: "#e1b800",
					error: "#ff5867",
				},
			},
		],
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark"],
	},
};
