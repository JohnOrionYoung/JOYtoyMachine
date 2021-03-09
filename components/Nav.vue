<template>
  <div class="navContainer">
    <div class="navLinks">
      <div class="navItemLeft">
        <a href="https://www.joy.lol/joys">JOYs</a>
      </div>
      <div class="navItemRight">
        <nuxt-link to="/" class="navLink">JOYtoys</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.navContainer {
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #0060e1;
}

.navLinks {
  width: 100%;
  // border: solid 5px black;
  // border-radius: 50px;
  // box-shadow: 2px 2px 7px 1px rgba(85, 85, 85, 0.59);

  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

a {
  text-shadow: 0px 1px 6px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
  color: #ffe70d;
  text-decoration: none;
  font-family: Doobie;
  font-size: 3rem;
}

// .navItemRight {
//   margin-left: 150px;
// }
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
