<template>
  <div class="Product" :class="`${mode}`">
    <div v-if="readStatus !== 'done'" class="productLoading">
      .~*-Loading JOYtoy-*~.
      <img
        class="loadingAnimation"
        :src="require(`../assets/loadingSpinner.gif`)"
      />
    </div>
    <transition name="slideup" appear>
      <div v-if="tokenData && readStatus !== 'working'" class="productTile">
        <div class="productImage">
          <img
            v-if="tokenData.id === 1"
            :src="require(`../assets/JOYtoy1.gif`)"
          />
          <img
            v-if="tokenData.id === 200"
            :src="require(`../assets/JOYtoy2.gif`)"
          />
          <img
            v-if="tokenData.id === 305"
            :src="require(`../assets/JOYtoy3.gif`)"
          />
          <img
            v-if="tokenData.id === 500"
            :src="require(`../assets/JOYtoy4.gif`)"
          />
          <img
            v-if="tokenData.id === 900"
            :src="require(`../assets/JOYtoy5.gif`)"
          />
          <img
            v-if="tokenData.id === 981"
            :src="require(`../assets/JOYtoy6.gif`)"
          />
          <img
            v-if="tokenData.id === 1022"
            :src="require(`../assets/JOYtoy7.gif`)"
          />
        </div>
        <!-- <img
            v-if="imageData"
            :src="`https://gateway.pinata.cloud/ipfs/${imageData.artworkHash}`"
          /> -->
        <div class="productMeta">
          <h4>{{ tokenData.title }}</h4>
          <!-- <p class="description small">{{ tokenData.feature }}</p> -->
          <p class="description small">{{ tokenData.description }}</p>
          <div class="metaRow">
            <span class="metaLabel">JOYtoy No.</span>
            <span v-if="tokenData.id === 1" class="metaValue">01</span>
            <span v-if="tokenData.id === 200" class="metaValue">02</span>
            <span v-if="tokenData.id === 305" class="metaValue">03</span>
            <span v-if="tokenData.id === 500" class="metaValue">04</span>
            <span v-if="tokenData.id === 900" class="metaValue">05</span>
            <span v-if="tokenData.id === 981" class="metaValue">06</span>
            <span v-if="tokenData.id === 1022" class="metaValue">07</span>
          </div>
          <div class="metaRow">
            <span class="metaLabel">Total</span>
            <span class="metaValue">{{ tokenData.editionSize }}</span>
          </div>
          <div class="metaRow">
            <span class="metaLabel">Price</span>
            <span class="metaValue">{{ tokenData.price }} ETH</span>
          </div>
        </div>

        <div class="productActions">
          <button
            v-if="tokenData && !tokenData.active"
            class="button joy invert"
            mode="joy"
            @click="openSeaLink()"
          >
            Gone
          </button>
          <button
            v-if="tokenData && !tokenData.vendingMachine && tokenData.active"
            class="button joy invert"
            mode="joy"
            @click="openSeaLink()"
          >
            Gone
          </button>
          <button
            v-if="walletAddress && tokenData.active && tokenData.vendingMachine"
            class="button joy"
            mode="joy"
            @click="triggerPurchase(id)"
          >
            Get
          </button>
          <button
            v-if="
              !walletAddress && tokenData.active && tokenData.vendingMachine
            "
            class="button joy"
            mode="joy"
            @click="handleConnect"
          >
            Get
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
            :price="`${tokenData.price} ETH`"
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
  flex-basis: 25%;
  min-width: 16rem;
  min-height: 10rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "VT323";
}
.productLoading {
  min-height: 20rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  // border: none;
}

.loadingAnimation {
  max-width: 75px;
  max-height: auto;
}
.productTile {
  border: 4px solid var(--ui-color, #111);
  box-shadow: 0 2px 1rem -0.25rem rgb(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 1);
  color: var(--text-color, #111);
  border-radius: 50px;

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
    padding: 0.5rem;
    min-height: 100px;
    h4,
    p {
      margin: 0;
    }
    h4 {
      text-align: center;
      font-family: "VT323";
    }
    .description {
      text-align: center;
    }
    .metaRow {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border-bottom: 1px dashed var(--text-color, #111);
      font-size: 0.875rem;
      .metaLabel {
        display: block;
      }
      .metaValue {
        font-weight: bold;
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

    this.handleLoad({ requiredNetwork })
  },

  methods: {
    ...mapActions({
      handleWeb3Connect: "walletStore/handleWeb3Connect",
      readTemplate: "walletStore/readTemplate",
      readToken: "walletStore/readToken",
      readImage: "walletStore/readImage"
    }),
    async handleLoad(props) {
      const { requiredNetwork } = props
      if (!process.client) {
        return
      }
      // NOTE: this uses the displayid, whle we have no reliable way to query the template token data
      if (!this.id) {
        return
      }
      this.readStatus = "working"

      // const templateData = await this.readTemplate({
      //   tokenId: this.displayid,
      //   requiredNetwork: this.requiredNetwork,
      //   axios: this.$axios
      // })
      // console.log("templateData", templateData)
      const data = await this.readToken({
        tokenId: this.displayid,
        requiredNetwork
      })

      this.tokenData = data || {}

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
    },
    openSeaLink(e) {
      window.open("https://opensea.io/collection/joyworld-joytoys")
    }
  }
}
</script>
