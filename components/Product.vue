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
            v-if="tokenData.id"
            :src="
              require(`../assets/` + mapTokenDataIds(tokenData.id) + `.gif`)
            "
          />
        </div>
        <div class="productMeta">
          <h4>{{ tokenData.title }}</h4>
          <p class="description small">{{ tokenData.description }}</p>
          <div class="metaRow">
            <span class="metaLabel">JOYtoy No.</span>
            <span class="metaValue">0{{ mapTokenDataIds(tokenData.id) }}</span>
          </div>
          <div class="metaRow">
            <span class="metaLabel">Total</span>
            <span class="metaValue">{{ tokenData.editionSize }}</span>
          </div>
          <div class="metaRow">
            <span class="metaLabel">Price</span>
            <span class="metaValue">{{ tokenData.price }} ETH</span>
          </div>
          <div class="metaRow">
            <span class="metaLabel">Collaborator</span>
            <span v-if="tokenData.id === 900" class="metaValue"> Franny </span>
            <span v-else-if="tokenData.id === 981" class="metaValue">
              Bubble Gum Borg
            </span>
            <span v-else-if="tokenData.id === 1699" class="metaValue">
              daWublr
            </span>
            <span v-else-if="tokenData.id === 2797" class="metaValue">
              The Persistence of Time
            </span>
            <span v-else class="metaValue">{{
              tokenData.collaborators ? tokenData.collaborators : "100% JOY"
            }}</span>
          </div>
        </div>
        <div class="joy-vision-container">
          <button
            v-if="
              this.$device.ios ||
              this.$device.iphone ||
              this.$device.iphoneX ||
              this.$device.iphoneXR ||
              this.$device.iphoneXSMax ||
              this.$device.ipod ||
              this.$device.ipad
            "
            class="joy-vision-btn"
            rel="ar"
            @click="
              triggerMobileVision(
                'https://storageapi.fleek.co/joyworld-bucket/JOYtoys/JOYtoy' +
                  mapTokenDataIds(tokenData.id) +
                  '/JOYtoy' +
                  mapTokenDataIds(tokenData.id) +
                  '.usdz'
              )
            "
          >
            JOYvision
          </button>
          <button
            v-if="this.$device.android || this.$device.androidPhone"
            class="joy-vision-btn"
            rel="ar"
            @click="
              triggerMobileVision(
                'https://storageapi.fleek.co/joyworld-bucket/JOYtoys/JOYtoy' +
                  mapTokenDataIds(tokenData.id) +
                  '/JOYtoy' +
                  mapTokenDataIds(tokenData.id) +
                  '.glb'
              )
            "
          >
            JOYvision
          </button>
          <button
            v-if="
              !this.$device.mobile &&
              !this.$device.ios &&
              !this.$device.iphone &&
              !this.$device.iphoneX &&
              !this.$device.iphoneXR &&
              !this.$device.iphoneXSMax &&
              !this.$device.ipod &&
              !this.$device.ipad &&
              !this.$device.android &&
              !this.$device.androidPhone
            "
            class="joy-vision-btn"
            @click="triggerVision()"
          >
            JOYvision
          </button>
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
            @click="connectAlert"
          >
            Get
          </button>
        </div>
        <modal
          :name="`info-modal${id}`"
          class="info-modal"
          :adaptive="false"
          :min-width="200"
          :min-height="200"
          :scrollable="true"
          :reset="true"
          width="87%"
          height="auto"
          :focus-trap="true"
          :click-to-close="false"
        >
          <PurchaseContent
            :id="id"
            :close-purchase="closePurchase"
            :price="`${tokenData.price} ETH`"
            :price-wei="tokenData.priceWei"
            :title="tokenData.title"
            :image-url="
              require(`../assets/` + mapTokenDataIds(tokenData.id) + `.gif`)
            "
          />
        </modal>
        <modal
          :name="`connect-modal`"
          class="connect-modal"
          :adaptive="false"
          :min-width="200"
          :min-height="200"
          :scrollable="true"
          :reset="true"
          width="87%"
          height="auto"
          :focus-trap="true"
          :click-to-close="false"
        >
          <ConnectAlert :close-connect="closeConnect" />
        </modal>
        <modal
          :name="`vision-modal${id}`"
          class="vision-modal"
          :adaptive="false"
          :min-width="100"
          :min-height="100"
          :scrollable="true"
          :reset="true"
          width="87%"
          height="auto"
          :focus-trap="true"
          :click-to-close="false"
        >
          <JOYVision
            :id="id"
            :token-id="tokenData.id"
            :close-vision="closeVision"
          />
        </modal>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.Product {
  flex-basis: 15%;
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
  width: 300px;
  border: 4px solid var(--ui-color, #111);
  box-shadow: 0 1px 2rem -0.5rem rgba(0, 0, 0, 0.74);
  background: rgb(255, 255, 255);
  color: var(--text-color, #111);
  border-radius: 50px;
  .productImage {
    width: 100%;
    min-height: 100px;
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
      height: 80%;
      object-fit: contain;
    }
  }
  .productMeta {
    justify-content: space-around;
    padding: 0.5rem;
    min-height: 100px;
    h4,
    p {
      margin: 0;
    }
    h4 {
      text-align: center;
      font-family: Sniglet, sans-serif;
      font-weight: 400;
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
.joy-vision-container {
  margin: 10px auto;
  display: flex;
  justify-content: center;
}
.joy-vision-btn {
  border: none;
  background: none;
  font-family: Sniglet, cursive;
  font-weight: 800;
  font-size: 20px;
  color: #0060e1;
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
    connectAlert() {
      this.$modal.show(`connect-modal`)
    },
    closeConnect() {
      this.$modal.hide(`connect-modal`)
    },
    triggerPurchase() {
      this.$modal.show(`info-modal${this.id}`)
    },
    closePurchase() {
      this.$modal.hide(`info-modal${this.id}`)
    },
    triggerVision(usdzSrc) {
      this.$modal.show(`vision-modal${this.id}`)
    },
    closeVision() {
      this.$modal.hide(`vision-modal${this.id}`)
    },
    openSeaLink() {
      window.open("https://opensea.io/collection/joyworld-joytoys")
    },
    triggerMobileVision(usdzSrc) {
      const anchor = document.createElement("a")
      anchor.setAttribute("rel", "ar")
      anchor.appendChild(document.createElement("img"))
      anchor.setAttribute("href", usdzSrc)
      anchor.click()
    },
    mapTokenDataIds(id) {
      const joyToyNo =
        [1, 200, 305, 500, 900, 981, 1022, 1699, 2180, 2797].indexOf(id) + 1
      return joyToyNo
    }
  }
}
</script>
