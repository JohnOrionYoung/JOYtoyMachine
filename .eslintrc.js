module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "plugin:vue/recommended",
    "prettier/vue",
    "plugin:prettier/recommended"

    // "prettier"

    // 'plugin:vue/recommended',
    // 'eslint:recommended',
    // 'prettier/vue',
    // 'plugin:prettier/recommended'
  ],
  globals: {
    $nuxt: true
  },
  // plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ]
  }
}
