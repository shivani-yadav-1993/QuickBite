import { resolve } from 'node:path'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  alias: {
    '~types': resolve('./types'),
    '~services': resolve('./services'),
    '~stores': resolve('./stores'),
    '~constants': resolve('./constants'),
    '~utils': resolve('./utils'),
    '~validations': resolve('./validations')
  },

  devtools: {
    enabled: true
  },

    modules: [
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
      '@vueuse/nuxt',
      '@nuxt/image',
      '@nuxt/fonts',
      '@nuxtjs/color-mode'
    ],

    css: [
      '~/assets/css/main.css'
    ],

    runtimeConfig: {
      public: {
        apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
        appName: process.env.NUXT_PUBLIC_APP_NAME
      }
    },

    colorMode: {
      preference: 'light',
      fallback: 'light',
      classSuffix: ''
    },

    app: {
      head: {
        title: 'QuickBite',
        meta: [
          {
            name: 'description',
            content: 'Enterprise Food Delivery Platform'
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
          }
        ]
      }
    }
  })