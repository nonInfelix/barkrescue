// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  css: ["~/assets/main.scss"],
  modules: ["@nuxtjs/eslint-module", "nuxt-icon", "@nuxtjs/supabase"],
});
