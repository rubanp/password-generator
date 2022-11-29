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
  head: {
    script: [
      {
        src: 'https://plausible.io/js/script.js',
        defer: true,
        "data-domain": 'amazing-parfait-af90e7.netlify.app'
      }
    ]
  }
})
