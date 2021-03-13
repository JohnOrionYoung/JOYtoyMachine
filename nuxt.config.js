export default {
  /**
   * this brings in environment variables to public and private nuxt references
   */
  publicRuntimeConfig: {
    requiredNetwork: process.env.PROD_NETWORK

    // VERCEL_ENV: process.env.VERCEL_ENV,
    // VERCEL_GIT_REPO_SLUG: process.env.VERCEL_GIT_REPO_SLUG,
    // VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
    // VERCEL_GIT_COMMIT_MESSAGE: process.env.VERCEL_GIT_COMMIT_MESSAGE,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "tokenshop-template",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=VT323&display=swap"
      }
    ],
    script: [
      {
        type: "module",
        src: "https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/css/main.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // { src: "~/plugins/localStorage.js", ssr: false },
    { src: "~plugins/vue-js-modal.js" },
    { src: "~plugins/web3ModalPlugin.js", mode: "client" },
    { src: "~plugins/web3plugin.js", mode: "client" }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      "@nuxtjs/eslint-module",
      {
        fix: true
      }
    ]
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)

  axios: {
    proxy: true
  },
  proxy: {
    "/api/": {
      target: "https://joyworld.azurewebsites.net",
      changeOrigin: true
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
