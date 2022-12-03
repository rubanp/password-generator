// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  css: [
    'assets/css/main.css',
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
