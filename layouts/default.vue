<template>
  <div
    id="layout"
    :class="[
      // uiMode, // sets how much ui is present
      // uiTheme, // sets the ui color theme
      // this.$mq, // comes from the media query plugin.
      this.$store.state.walletStore.walletNetwork || 'no-network' // main or rinkby (and future: Flow)
    ]"
  >
    <Header />
    <Nav />
    <Connect />
    <Nuxt />
    <Nav />
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
import tokenshop from "../tokenshop.config"
export default {
  data() {
    return {
      // backgroundColor: '#f00',
    }
  },

  computed: {
    ...mapGetters({
      uiMode: "ui/uiMode",
      uiTheme: "ui/uiTheme",
      contrastMode: "ui/contrastMode"
    }),
    walletNetwork() {
      return this.$store.state.walletStore.walletNetwork
    }
  },
  mounted() {
    // console.log('this.$el', this.$el);
    this.$root.$el.style.setProperty(
      "--background-color",
      tokenshop.colors.backgroundColor
    )
    this.$root.$el.style.setProperty("--text-color", tokenshop.colors.textColor)
    this.$root.$el.style.setProperty("--ui-color", tokenshop.colors.uiColor)
    this.$root.$el.style.setProperty(
      "--brand-color",
      tokenshop.colors.brandColor
    )
    this.$root.$el.style.setProperty(
      "--secondary-color",
      tokenshop.colors.secondaryColor
    )
  },

  methods: {
    ...mapMutations({
      setUiTheme: "ui/setUiTheme"
    })
  }
}
</script>
<style id="styles" lang="scss">
// :root {
//   --accent-color: red;

// }
#layout {
  //     --background-color: blue;
}

// JOY

@font-face {
  font-family: 'Doobie';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/Doobie.ttf') format('truetype');
}

</style>
