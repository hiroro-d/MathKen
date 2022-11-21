// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "client/",
  app: {
    head: {
      title: "ますけん",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com"},
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" },
      ], // link
      src: "./assets/vendor/preline/dist/preline.js",
    } // head
  }, // app
  modules: ["@nuxtjs/tailwindcss"],
})
