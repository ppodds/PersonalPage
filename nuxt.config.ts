// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-04',
  modules: ["@nuxtjs/tailwindcss"],
  typescript: {
    shim: false,
    strict: true,
  },
  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
  },
});
