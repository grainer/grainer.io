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
    ],
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-79XRKWDMBD', async: true },
      {
        innerHTML: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-79XRKWDMBD');
                    `
      },
      {
        id: 'mcjs',
        innerHTML: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/6c1d936364d19ff195a11950d/baabe9353b98ea86c5609ee6d.js");
                    `
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
