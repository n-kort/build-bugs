// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/i18n', {
      locales: [
        { code: 'de', file: 'de.json' },
        { code: 'en', file: 'en.json' }
      ],
      customRoutes: 'config',
      pages: {
        search: {
          de: '/suchen',
          en: '/search'
        }
      },
      defaultLocale: 'en',
      strategy: 'prefix'
    }]
  ],
  devtools: { enabled: true }
})
