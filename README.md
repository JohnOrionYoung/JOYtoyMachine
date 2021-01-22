# nftShop

This is a repo to template a simple page token vending shop. It is based on Vue/Nuxt served to Vercel hosting.

# SETUP

- edit the tokenshop.config.js with relevant settings.
  - colors will automatically be rendered as css variables.
  - site info will be turned into meta content for page titles/descriptions
  - logoUrl will appear at top left
- ensure you have a correct ABI in the contractABI.js file.
- you will need to supply infura keys, and keys for any wallet providers you want to support. I have implemented with default providers, but don't guarantee they will remain active.

# Website Editing

- Vue (html) pages are in the `/pages` folder, along with locally scoped css.
- global css is in `/assets/css`
- static files can be places in `/assets/*` if you wish to import into vue pages, or in `/static` if you wish to link like normal html
- `/static` is deployed as the root of your website when compiled.
- custom fonts (google fonts) can be added in the head section of the `nuxt.config.js` file

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
