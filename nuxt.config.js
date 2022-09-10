export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mydentist-admin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: 8000,
  },

  axios: {
    baseURL: 'http://127.0.0.1:3000/api/v1'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'admin/auth/login', method: 'post', propertyName: 'data.accessToken' },
          user: { url: 'admin/account', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  }
}
