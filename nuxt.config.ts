// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  components: [
    { path: "~/components/atoms" },
    { path: "~/components/molecules" },
    { path: "~/components/organisms" },
    { path: "~/components/templates" },
    "~/components",
  ],
});
