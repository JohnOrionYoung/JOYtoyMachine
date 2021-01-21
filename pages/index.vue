<template>
  <div class="pageContainer">
    <section class="hero">
      <p>{{ description }}</p>
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

.row.between {
    justify-content: center;
}

.brandImage[data-v-96f67418] {
    width: 30rem;
    height: 10rem;
}

.productTile {
    border-radius: 50px;
}

.button.joy {
    
    font-size: 40px;
    border-radius: 50px;
    width: 100%;
    border: 4px solid var(--text-color,#000);
    border-color: #ffe70d;
    letter-spacing: 2px;
}


.button.joy.invert {
    border: 4px solid var(--text-color,#000);
    background: var(--background-color,#ffe70d);
}

</style>
