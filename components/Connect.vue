<template>
  <header class="Header">
    <div class="row full between">
      <div class="profile">
        <client-only>
          <div id="accountWrap" class="accountWrap">
            <Button
              v-if="!walletAddress"
              class="button joy"
              @click.native="handleConnect"
              >CONNECT WALLET</Button
            >

            <div v-if="walletAddress" class="networkLabel">
              {{ walletNetwork === "main" ? "MetaMask:" : "WalletConnect:" }}
            </div>
            <div v-if="walletAddress">
              <Button class="disconnect" @click.native="handleDisconnect">
                Disconnect
              </Button>
            </div>
          </div>
        </client-only>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex"
import tokenshop from "../tokenshop.config"
export default {
  props: { mode: { type: String, default: "" } },

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
      networkCheck: "walletStore/networkCheck",
      handleDisconnect: "walletStore/handleDisconnect"
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
    padding-top: 10px;
  }
  .networkLabel {
    border: 0px solid var(--ui-color, #000);
    font-size: 30px;
    padding: 0 0.5rem;
    line-height: 1;
    font-family: "VT323";
  }
  .disconnect {
    color: black;
    background-color: transparent;
    border: 3px solid black;
    border-radius: 50px;
    padding: 5px 20px 5px 20px;
    font-family: "VT323";
    font-size: 20px;
  }
}
</style>
