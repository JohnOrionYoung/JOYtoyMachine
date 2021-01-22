<template>
  <div class="pageContainer">
    <section class="hero">
      <p>{{ description }}</p>
      
      <p>
        <div class="profile">
      <client-only>
        <div id="accountWrap" class="accountWrap">
          <Button
            v-if="!walletAddress"
            class="button joy"
            @click.native="handleConnect"
            >CONNECT WALLET</Button
          >

          <div v-if="walletNetwork" class="networkLabel">
            {{ walletNetwork === "main" ? "Connected" : walletNetwork }}
          </div>
          <div v-if="walletAddress"><IconUser /></div>
        </div>
      </client-only>
    </div>
      </p>    
      
      
      
    </section>
    <section>
      <Products>
        <Product
          v-for="(tokenId, index) in productsArray"
          :id="tokenId"
          :key="index"
          :displayid="displayArray[index]"
        />
      </Products>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

import tokenshop from "../tokenshop.config"

export default {
  name: "NFTShop",
  data() {
    return {
      title: "",
      description: "",
      contractHash: "",
      baseUrl: "https://localhost:3000",
      logoUrl: tokenshop.site.logoUrl || "",
      previewUrl: `images/preview.jpg`,
      productsArray: [],
      displayArray: []
    }
  },
  computed: {
    ...mapGetters({
      contrastMode: "ui/contrastMode",
      readStatus: "walletStore/readStatus",
      tokenData: "walletStore/tokenData",
      imageData: "walletStore/imageData"
    })
  },
  created() {
    this.brandName = tokenshop.site.brandName
    this.title = tokenshop.site.title
    this.description = tokenshop.site.description
    this.logoUrl = tokenshop.site.logoUrl
    this.contractHash = tokenshop.contracts.main
    const network = this.$config.requiredNetwork
    if (network === "rinkeby") {
      this.productsArray = tokenshop.site.products.rinkeby
      this.displayArray = tokenshop.site.products.rinkebyDisplay
    } else {
      this.productsArray = tokenshop.site.products.main
      this.displayArray = tokenshop.site.products.mainDisplay
    }
  },
  mounted() {},

  methods: {
    ...mapActions({
      readToken: "walletStore/readToken"
    })
  },
  head: {
    title: tokenshop.site.title,
    meta: [
      {
        hid: "description",
        name: "description",
        content: tokenshop.site.description
      },
      {
        hid: "og:description",
        name: "og:description",
        content: tokenshop.site.description
      },
      { hid: "og:title", name: "og:title", content: tokenshop.site.title },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: tokenshop.site.brandName
      },
      { hid: "og:type", name: "og:type", content: "website" },
      {
        hid: "og:image",
        property: "og:image",
        content: tokenshop.site.logoUrl
      }
    ]
  }
}
</script>





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
    border: 1px solid var(--ui-color, #000);
    font-size: 0.75rem;
    padding: 0 0.5rem;
    line-height: 1.5;
    border-radius: 0.25rem;
  }
}
</style>





<style lang="scss">
.hero {
  text-align: center;
  font-family: "VT323";
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
  }
  h1 {
    text-align: center;
    font-family: "VT323";
    font-size: 2rem;
  }
}

//JOY
.row.between {
    justify-content: center;
}

</style>
