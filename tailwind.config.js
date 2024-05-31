/** @type {import('tailwindcss').Config} */
export default {
	content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
	theme: {
		extend: {
			colors: {
				primary: "hsl(70, 70%, 46%)",
				secondary: "hsl(70, 50%, 31%)",
				tertiary: "hsl(69, 34%, 18%)",
				contrast: "#E6D720",
				black: "hsl(5, 0%, 0%)",
				white: "hsl(5, 0%, 100%)",
			},
			screens: {
				xxs: "375px",
				xs: "425px",
				"3xl": "1920px",
			},
		},
	},
	plugins: [],
}


