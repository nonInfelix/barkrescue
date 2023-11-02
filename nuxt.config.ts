// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  css: ["~/assets/main.scss"],
  modules: [
    "nuxt-icon",
    "@nuxtjs/supabase",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Nunito: true,
          Poppins: true,
        },
      },
    ],
  ],
  supabase: {
    redirect: false,
  },
});
