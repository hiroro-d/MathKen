// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "client/",
  experimental: {
    viteNode: true
  },
  app: {
    head: {
      title: "γΎγγγ",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com"},
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" },
      ], // link
      src: "./assets/vendor/preline/dist/preline.js",
    }, // head
    pageTransition: { name: 'page', mode: 'out-in' }
  }, // app
  css: [
    '~/assets/css/main.css'
  ],
  modules: [
    "@nuxtjs/tailwindcss",
  ]
})
