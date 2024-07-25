import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				accent: "#5850EC",
				primary: "#5850EC",
				"white-50": "rgba(255, 255, 255, 0.5)",
			},
			textColor: {
				dark: "#1F2A37",
				"dark-secondary": "#4B5563",
				light: "#ffffff",
			},
			backgroundColor: {
				dark: "#1F2A37",
				"dark-secondary": "#4B5563",
				light: "#FFFDF0",
			},
			backgroundImage: {
				// "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, #FFEF99 0%, #FFFDF0 100%)",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"home-gradient":
					"radial-gradient(257.3% 141.42% at 0% 0%, #F9F3F1 0%, #F7EEDE 100%)",
				"accent-gradient":
					"linear-gradient(110.41deg, #4A89DB -2.4%, #39C77B 105.71%)",
				"white-gradient": 
					"linear-gradient(103.51deg, #EEF2F6 41%, #FFFFFF 45%, #EEF2F6 51%, #FFFFFF 61%, #EEF2F6 74.5%)",
				"gradient-repeating": 
					'repeating-linear-gradient(180deg, white 0%, #F9F9FF 25%, white 50%, #F9F9FF 75%, white 100%)',
			},
			fontSize: {
				"extra-large-title": "5rem",
				"large-title": "3.812rem",
				title: "2.938rem",
				"small-title": "2.25rem",
				heading: "1.688rem",
				"small-heading": "1.312rem",
				"large-button": "1.25rem",
				button: "1rem",
				body: "1rem",
				small: "0.75rem",
				"extra-small": "0.562rem",
			},
			maxWidth: {
				"4/5": "80%",
				"9/10": "90%",
			},
			minHeight: {
				"1/2": "50%",
				"3/4": "75%",
			},
			borderRadius: {
				"10": "10pt",
				"15": "15pt",
				"20": "20pt",
				"30": "30pt",
				"40": "40pt",
			},
			screens: {
				"3xl": "1920px",
				"not-touch": { raw: "(hover: hover)" },
				touch: { raw: "(hover: none)" },
			},
		},
	},
	variants: {
		extend: {
			opacity: ["hover"],
		},
	},
	plugins: [],
};
export default config;
