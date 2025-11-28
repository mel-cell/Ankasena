// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "@nuxt/hints", "@nuxt/image", "@nuxt/ui"],

  css: ["~/assets/css/main.css"],

  devServer: {
    port: 3000,
  },

  runtimeConfig: {
    public: {
      payloadUrl: process.env.PAYLOAD_URL || "http://localhost:4000",
    },
  },

  routeRules: {
    "/api/**": { proxy: "http://localhost:4000/api/**" },
  },
});
