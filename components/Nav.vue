<template>
  <div class="Nav row center" :class="`${uiTheme}}`">
    <div class="navItem">
      <nuxt-link to="/" class="navLink">Home</nuxt-link>
    </div>

    <div class="navItem">
      <nuxt-link to="/products" class="navLink">Products</nuxt-link>
    </div>

    <div class="navItem">
      <nuxt-link to="/about" class="navLink">About</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss">
.Nav {
  flex-basis: 100%;
  flex-shrink: 1;
  align-items: center;
  justify-content: center;
  .navItem {
    padding: 0 2rem;
  }
}
</style>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex"
// import tokenshop from '../tokenshop.config'
export default {
  data() {
    return {
      brandName: ""
    }
  },
  computed: {
    ...mapGetters({
      uiTheme: "ui/uiTheme",
      hasWallet: "ui/hasWallet",
      contrastMode: "ui/contrastMode",
      devMode: "ui/devMode"
    })
  },
  methods: {
    ...mapMutations({
      setShowAccount: "ui/setShowAccount",
      setShowSearch: "ui/setShowSearch",
      toggleHiddenUi: "ui/toggleHiddenUi",
      setWalletChain: "ui/setWalletChain",
      setDevMode: "ui/setDevMode"
    }),

    ...mapActions({
      showStatusModal: "mintFormStore/showStatusModal",
      showCropperModal: "mintFormStore/showCropperModal"
    })
  }
}
</script>
