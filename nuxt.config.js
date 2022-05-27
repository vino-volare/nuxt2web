export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tokino Vino',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'アマチュアイラストレーター' },
      { hid: 'keywords', name: 'keywords', content:'ときの,ビーノ,tokino,vino,イラスト,イラストレーター,ダンスミュージック,ストリート'},
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'TokinoVino'},
      { hid: 'og:type', property: 'og:type', content: 'website'},
      { hid: 'og:title', property: 'og:title', content: 'TokinoVino'},
      { hid: 'og:url', property: 'og:url', content: 'https://vinovolare.com'},
      { hid: 'og:description', property: 'og:description', content: 'アマチュアイラストレーター'},
      { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/tokino/image/upload/v1653632269/website/static/TokinoVino_ogp_dgq6m5.jpg'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: '@vinovolare'},
      {name: 'twitter:creator', content: '@vinovolare'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', sizes: '192x192', type: 'image/png', href: 'https://res.cloudinary.com/tokino/image/upload/v1653465182/website/static/icon-192x192_oudco0.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/png', href: 'https://res.cloudinary.com/tokino/image/upload/v1653465095/website/static/apple-touch-icon-180x180_z7uaza.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  image: {
    screens: {
      xs: 400,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/tokino/image/upload/'
    }
  }
}
