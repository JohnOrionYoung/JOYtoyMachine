<template>
  <header class="Header">
    <div class="row full between">
    </div>
    
    <div class="profile">
      <client-only>
        <div id="accountWrap" class="accountWrap">
          <Button
            v-if="!walletAddress"
            class="button joy"
            @click.native="handleConnect"
            >CONNECT WALLET</Button>

          <div v-if="walletNetwork" class="networkLabel">
            {{ walletNetwork === "main" ? "Connected" : walletNetwork }}
          </div>
          <div v-if="walletAddress"><IconUser /></div>
        </div>
      </client-only>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex"
import tokenshop from "../tokenshop.config"
export default {
  data() {
    return {
      brandName: "",
      rootUrl: "",
      requiredNetwork: "",
      VERCEL_ENV: "",
      VERCEL_GIT_REPO_SLUG: "",
      VERCEL_GIT_COMMIT_SHA: "",
      VERCEL_GIT_COMMIT_MESSAGE: "",
      VERCEL_URL: ""
    }
  },
  computed: {
    ...mapGetters({
      walletStatus: "walletStore/walletStatus",
      walletAddress: "walletStore/walletAddress",
      walletNetwork: "walletStore/walletNetwork",
      walletType: "walletStore/walletType"
    })
  },
  created() {
    this.brandName = tokenshop.site.brandName
    this.hasNavigation = tokenshop.site.hasNavigation
  },
  mounted() {
    // these are environmentVariables imported via NUXT config
    if (this.$config) {
      // const requiredNetwork = this.$config.requiredNetwork
      // const VERCEL_ENV = this.$config.VERCEL_ENV || 'local'
      // const VERCEL_GIT_REPO_SLUG = this.$config.VERCEL_GIT_REPO_SLUG || 'local'
      // const VERCEL_GIT_COMMIT_SHA =
      //   this.$config.VERCEL_GIT_COMMIT_SHA || 'local'
      // const VERCEL_GIT_COMMIT_MESSAGE =
      //   this.$config.VERCEL_GIT_COMMIT_MESSAGE || '-'
    }
    // if (process.client) {
    // checks if the wallet is on the cirrect network
    const requiredNetwork = this.$config.requiredNetwork
    this.networkCheck(requiredNetwork)
    // }
  },
  methods: {
    ...mapMutations({
      setWalletNetwork: "walletStore/setWalletNetwork"
    }),
    ...mapActions({
      handleWeb3Connect: "walletStore/handleWeb3Connect",
      networkCheck: "walletStore/networkCheck"
    }),
    handleConnect() {
      console.log("this", this)
      const web3Modal = this.$web3Modal
      if (web3Modal) {
        this.handleWeb3Connect(web3Modal)
      }
    }
  }
}
</script>

<style lang="scss">
.Header {
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  .accountWrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .networkLabel {
    border: 1px solid var(--ui-color, #111);
    font-size: 0.75rem;
    padding: 0 0.5rem;
    line-height: 1.5;
    border-radius: 0.25rem;
  }
}
</style>
