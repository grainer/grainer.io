const pkg = require('./package')
const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')

module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */

  // TODO: add google fonts  here
  head: {
    title: pkg.name,
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: pkg.description }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://api.tiles.mapbox.com/mapbox-gl-js/v1.3.1/mapbox-gl.css' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Taviraj&display=swap' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
        integrity: 'sha384-REHJTs1r2ErKBuJB0fCK99gCYsVjwxHrSU0N7I1zl9vZbggVJXRMsv/sLlOAGb4M',
        crossorigin: 'anonymous'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  // loading: '@/components/Loading.vue',

  router: {
    linkPrefetchedClass: 'nuxt-link-prefetched',
    middleware: 'beforEach'
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vue-tilt'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    postcss: {
      plugins: [require('tailwindcss')(tailwindJS), require('autoprefixer')]
    }
  }
}
