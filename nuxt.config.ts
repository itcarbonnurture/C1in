export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/scripts',
  ],

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
  ],

  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js', // Подключаем Bootstrap JS
          type: 'text/javascript',
          defer: true, // Скрипт загружается после HTML
        },
      ],
    },
  },
});
