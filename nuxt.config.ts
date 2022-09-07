import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-material-design-icons-iconfont",
  ],
  plugins: [
    "~/plugins/vee-validate.rules.ts",
    "~/plugins/apollo-client.ts",
    "~/plugins/check-user.ts",
  ],
  build: {
    transpile: [
      "@vee-validate/rules",
      "@apollo/client",
      "ts-invariant/process",
    ],
  },
  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: true,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
});
