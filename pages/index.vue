<template>
  <div class="pageContainer">
    <header class="hero">
      <h1>
        GET new JOYtoys from the JOYtoy Machine or find them on
        <a
          class="openSeaLink"
          href="https://opensea.io/collection/joyworld-joytoys"
          target="_blank"
          >OpenSea</a
        >
        when they’re GONE!
      </h1>
      <p class="outOfOrder">WalletConnect is ~Out of Order~</p>
    </header>
    <main>
      <Products>
        <Product
          v-for="(tokenId, index) in productsArray"
          :id="tokenId"
          :key="index"
          :displayid="displayArray[index]"
        />
      </Products>
    </main>
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
    font-size: 1.5rem;
  }
  a {
    font-family: "VT323";
    font-size: 1.75rem;
  }
}
.outOfOrder {
  font-size: 1.5em;
}
.openSeaLink {
  font-size: 20px;
  color: black;
  text-decoration: underline;
}
//JOY
.productTile .productMeta h4 {
  text-align: center;
  font-family: "Doobie";
  font-size: 16px;
}
.row.between {
  justify-content: center;
}
.networkLabel {
  border: 1px solid var(--ui-color, #000);
  font-size: 0.75rem;
  padding: 0 0.5rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}
</style>
