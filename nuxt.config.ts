// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/i18n', {
      defaultLocale: 'en',
      strategy: 'prefix'
    }]
  ],
  devtools: { enabled: true }
})
