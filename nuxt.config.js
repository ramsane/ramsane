import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  // loading: for universal mode and `loadingIndicator` for spa mode.
  loading: {
    color: '#fa9236',
    height: '2px', //
    duration: 5000 // maximum duration before loading the page
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App,
   ** It could any vue related OR any other code
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome'
  ],

  /* config for fontawesome */
  fontawesome: {
    component: 'fa',
    icons: {
      // icons that we want to use
      brands: ['faGithub', 'faLinkedin'],
      solid: ['faBook', 'faEnvelopeSquare'],
      regular: ['faEnvelope']
    }
  },

  /*
   ** Nuxt.js modules
   ** Modules developed specifically for nuxt. ex. @nuxtjs/axios
   ** It will give you a deeper integration of modules in the Vue app.
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** as we have added detenv, we can add a object dotenv: { conf related to it}
   ** same with axios. But we are ignoring it here
   */

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {
        customProperties: true
      },
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          linkedin: '#0077B5',
          github: '#24292E',
          gitbook: '#3884FE',
          gmail: '#D44638'
        },
        light: {
          linkedin: '#0077B5',
          github: '#24292E',
          gitbook: '#3884FE',
          gmail: '#D44638'
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
