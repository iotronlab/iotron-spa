import minifyTheme from 'minify-css-string'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Progressive Web Agency',
    title: 'iotron',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Progressive Web Agency',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-masonry-css.js', '~/plugins/vee-validate.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-fonts',
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    // { src: '~/plugins/vue-masonry', ssr: false },
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8000/api',
    // baseURL: 'https://api.iaa.org.in/api',
    // baseURL: 'http://localhost:8000/api',
    // baseURL: 'https://devapi.iaa.org.in/api',
  },

  // google fonts
  googleFonts: {
    families: {
      'IBM+Plex+Mono': true,
      Charmonman: true,
      'Atkinson+Hyperlegible': true,
    },
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done,
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done,
      })
    },
  },
  // gsap
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
      text: true,
    },
    clubPlugins: {
      drawSVG: true,
      morphSVG: true,
      gsDevTools: true,
      scrollSmoother: true,
      scrambleText: true,
      splitText: true,
    },
    extraEases: {
      // expoScaleEase: true,
      slowMo: true,
      roughEase: true,
    },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      theme_color: '#121212',
      nativeUI: true,
      name: 'iotron',
      author: 'iotron',
      description: `Web development agency`,
      ogHost: 'https://www.iotron.co',
    },
    manifest: {
      lang: 'en',
      name: 'iotron',
      short_name: 'iotron',
      description: `Web development agency`,
      background_color: '#121212',
    },
  },

  loadingIndicator: {
    name: 'wandering-cubes',
    color: '#02f4c8',
    background: '#0f172a',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    theme: {
      dark: true,
      options: {
        customProperties: true,
        variations: false,
        // themeCache: {
        //   get: (key) => localStorage.getItem(key),
        //   set: (key, value) => localStorage.setItem(key, value),
        // },
        minifyTheme,
      },
      themes: {
        dark: {
          primary: '#41bbf6',
          accent: '#02f4c8',
          secondary: 'f9b31e',
          info: '#6366F1',
          warning: '#F59E0B',
          error: '#EF4444',
          success: '#9FE2BF',
        },
        light: {
          primary: '#41bbf6',
          accent: '#0d9488',
          secondary: 'f9b31e',
          info: '#6366F1',
          warning: '#F59E0B',
          error: '#EF4444',
          success: '#9FE2BF',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
    extractCSS: {
      ignoreOrder: true,
    },
    optimization: {
      splitChunks: {
        maxSize: 200000,
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    analyze: {
      analyzerMode: 'static',
    },
  },
}
