<template>
  <div class="Product" :class="`${mode}`">
    <div v-if="readStatus !== 'done'" class="productLoading">
      Loading JOYtoys...
    </div>
    <transition name="slideup" appear>
      <div v-if="tokenData && readStatus !== 'working'" class="productTile">
        <div class="productImage">
          <img
            v-if="imageData"
            :src="`https://gateway.pinata.cloud/ipfs/${imageData.artworkHash}`"
          />
        </div>

        <div class="productMeta">
          <h4>{{ tokenData.title }}</h4>
          <p class="description small">{{ tokenData.description }}</p>
          <!-- <p class="description small">{{ tokenData.feature }}</p> -->
          
          <div class="metaRow">
            <span class="metaLabel">LIMITED EDITION</span>
            <span class="metaValue">{{ tokenData.editionSize }}</span>
          </div>
          
          <div class="metaRow">
            <span class="metaLabel">PRICE</span>
            <span class="metaValue">{{ tokenData.price }} ETH</span>
            <!-- <span class="metaValue">{{ tokenData.priceWei }} ETH</span> -->
          </div>
        </div>

        <div class="productActions">
          <button
            v-if="tokenData && !tokenData.active"
            class="button joy invert"
            mode="joy"
            @click="window.location = https://opensea.io/collection/joyworld-joytoys/?ref=0x4d430e327c8967cd23a8c17a256ba4f33e2a2ced"
          >
            GONE
          </button>
          <button
            v-if="walletAddress && tokenData.active"
            class="button joy"
            mode="joy"
            @click="triggerPurchase(id)"
          >
            GET
          </button>
          <button
            v-if="!walletAddress && tokenData.active"
            class="button joy"
            mode="joy"
            @click="handleConnect"
          >
            GET
          </button>
        </div>
        <modal
          :name="`info-modal${id}`"
          class="info-modal"
          :adaptive="true"
          :min-width="200"
          :min-height="200"
          :scrollable="false"
          :reset="true"
          width="60%"
          height="auto"
          :focus-trap="true"
          :click-to-close="true"
        >
          <PurchaseContent
            :id="id"
            :close-action="closeAction"
            :price="`${tokenData.price} Eth`"
            :price-wei="tokenData.priceWei"
            :title="tokenData.title"
            :image-url="
              imageData &&
              `https://gateway.pinata.cloud/ipfs/${imageData.artworkHash}`
            "
          />
        </modal>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.Product {
  flex-basis: 20%;
  min-width: 300px;
  max-width: 420px;
  min-height: 10rem;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.productLoading {
  min-height: 20rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  font-family: "VT323";
  // border: none;
}
.productTile {
  border: 4px solid var(--ui-color, #000);
  box-shadow: 0 2px 1rem -0.25rem rgb(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 1);
  color: var(--text-color, #000);
  border-radius: 50px;
  font-family: "VT323";
  .productImage {
    width: 100%;
    min-height: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .productMeta {
    padding: 0px;
    min-height: 100px;
    h4,
    p {
      margin: 0;
    }
    h4 {
      text-align: center;
      height: 80px;
      font-family: "Doobie";
      font-size: 20px;
      font-weight: 400;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .description {
      text-align: center;
      font-size: 15px;
      padding-bottom: 10px;
    }
    .metaRow {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-right: 40px;
      padding-left: 40px;
      line-height: 16px;
      border-bottom: 1px dotted var(--text-color, #777777);
      font-size: 16px;
      .metaLabel {
      }
      .metaValue {
       // font-weight: bold;
      }
    }
  }
  .productActions {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  props: {
    mode: { type: String, default: "" },
    index: { type: Number, default: 0 },
    id: { type: Number, default: 0 },
    displayid: { type: Number, default: 0 }
  },

  data() {
    return {
      requiredNetwork: null,
      readStatus: "",
      tokenData: null,
      imageData: null
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
  mounted() {
    this.readStatus = "loading"
    const requiredNetwork = this.$config.requiredNetwork
    this.requiredNetwork = requiredNetwork
    this.handleLoad()
  },

  methods: {
    ...mapActions({
      handleWeb3Connect: "walletStore/handleWeb3Connect",
      readTemplate: "walletStore/readTemplate",
      readToken: "walletStore/readToken",
      readImage: "walletStore/readImage"
    }),
    async handleLoad(props) {
      // NOTE: this uses the displayid, whle we have no reliable way to query the template token data

      if (!this.id) {
        return
      }
      this.readStatus = "working"
      //const templateData = await this.readTemplate({
      //  tokenId: this.displayid,
      //  requiredNetwork: this.requiredNetwork,
      //  axios: this.$axios
      //})
      //console.log("templateData", templateData)
      const data = await this.readToken({
        tokenId: this.displayid,
        requiredNetwork: this.requiredNetwork
      })
      this.tokenData = data
      this.readStatus = "done"
      const imageData = await this.readImage({
        tokenId: this.displayid,
        index: 1,
        requiredNetwork: this.requiredNetwork
      })
      this.imageData = imageData
    },
    handleConnect() {
      const web3Modal = this.$web3Modal
      if (web3Modal) {
        this.handleWeb3Connect(web3Modal)
      }
    },
    triggerPurchase(id) {
      this.$modal.show(`info-modal${this.id}`)
    },
    closeAction() {
      this.$modal.hide(`info-modal${this.id}`)
    }
  }
}
</script>
