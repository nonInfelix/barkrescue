// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  css: ["~/assets/main.scss"],
  modules: [
    "@nuxt/image",
    "nuxt-icon",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Agbalumo: true,
          Poppins: true,
        },
      },
    ],
  ],
  supabase: {
    redirect: false,
    cookieOptions: {
      secure: false,
    },
    clientOptions: {
      auth: {
        flowType: "implicit",
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true,
      },
    },
  },
});
