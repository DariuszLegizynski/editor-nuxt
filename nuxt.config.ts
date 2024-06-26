// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["~/assets/css/global.css", "~/assets/css/tailwind.css"],
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/strapi", "@nuxt/image"],
	image: {
		dir: "assets/images",
	},
	plugins: ["~/plugins/gsap.js"],
})
