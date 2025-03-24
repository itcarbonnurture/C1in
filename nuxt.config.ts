export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon', 
    '@nuxt/image', 
    '@nuxt/ui',
    '@nuxt/scripts'
  ],

  css: [
     
    'bootstrap/dist/css/bootstrap.min.css'
  ],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;800&display=swap'
        }
      ]
    }
  }
})
