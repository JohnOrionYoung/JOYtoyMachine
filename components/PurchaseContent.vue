<template>
  <div class="modalContent">
    <div class="spaceContainer">
      <div v-if="!transactionStatus && !pendingToken" class="modalSection">
        <h2>Purchase JOYtoy</h2>
        <div class="tokenPreview">
          <div class="previewImage">
            <img :src="imageUrl" alt="Preview..." />
          </div>
          <div class="previewContent">
            <div class="previewTitle">
              {{ title }}
            </div>
            <div class="subtitle">
              {{ price }}
            </div>
          </div>
        </div>
        <h2>You sure?</h2>
        <div class="modalActions">
          <button
            id="modalactionsYN"
            class="button joy"
            @click="
              purchaseToken({
                tokenId: id,
                requiredNetwork: requiredNetwork,
                priceWei: priceWei,
                walletAddress: walletAddress
              })
              confettiPop()
            "
          >
            Yes, gimme!
          </button>

          <button
            id="modalactionsYN"
            class="button joy invert"
            @click="
              {
                closePurchase()
              }
            "
          >
            No Thanks
          </button>
        </div>
      </div>

      <!-- <div v-if="transactionStatus" class="tokenStatus">
      <span
        v-if="
          transactionStatus !== 'completed' &&
          transactionStatus !== 'pending' &&
          transactionStatus !== 'confirming'
        "
        class="statusText"
      >
        {{ transactionStatus }}
      </span>
      <div v-if="transactionStatus === 'completed'">
        <div class="completedContent">Transaction complete!</div>
        <button
          class="button joy"
          @click="
            {
              handleReset()
              closePurchase()
            }
          "
        >
          CLOSE
        </button>
      </div>
    </div> -->
      <!-- <button
      class="button joy"
      @click="
        {
          trackTransaction({
            transactionId:
              '0x66b9698350708e66eec584034a62a10307ad1fb04874a1a8e11710f8c5463a11',
            requiredNetwork: requiredNetwork,
          })
        }
      "
    >
      Track transaction
    </button> -->

      <div v-if="transactionStatus && transactionStatus === 'confirming'">
        <span>Confirm this transaction in your wallet to continue.</span>
      </div>
      <div v-if="transactionStatus && transactionStatus === 'error'">
        <span v-if="!transactionError" class="statusError"
          >Something got weird.</span
        >
        <span v-if="transactionError" class="statusError">{{
          transactionError
        }}</span>
        <div v-if="transactionError" class="modalActions">
          <button
            class="button joy invert"
            @click="
              closePurchase()
              confettiStop()
              handleReset()
            "
          >
            Start Over
          </button>
        </div>
      </div>
      <div v-if="pendingToken && pendingToken === id" class="txContainer">
        <div class="pendingImage">
          <img :src="imageUrl" alt="Preview..." />
        </div>
        <h3 v-if="transactionOkay === false">
          Once you "Confirm" the request in MetaMask the JOYtoy Machine will
          begin making your new {{ title }}. It could take a few minutes to spin
          up. Please enjoy this moment for yourself!
        </h3>
        <div v-if="transactionOkay === false" class="vidPlayer">
          <iframe
            src="https://www.youtube-nocookie.com/embed/ZfBbVV7zXco?autoplay=1&playlist=ZfBbVV7zXco&loop=1&modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&theme=light&fs=0&color=white&controls=0&disablekb=1"
            width="200"
            height="200.5"
            frameborder="0"
          ></iframe>
        </div>
        <button
          v-if="transactionId && transactionOkay === false"
          class="button joy"
          @click="transactionClear()"
        >
          Continue
        </button>
        <h2 v-if="transactionId && transactionOkay === true">
          Your {{ title }} is being made and will be available in your wallet
          soon! Check out the transaction status on Etherscan.
        </h2>
        <h4 v-if="transactionId && transactionOkay === true">
          Tx: {{ transactionId }}
        </h4>
        <div class="modalActions">
          <button
            v-if="transactionId && transactionOkay === true"
            class="joy button invert"
            @click="openTracking()"
          >
            View Transaction
          </button>
          <button
            v-if="transactionId && transactionOkay === true"
            class="button joy"
            @click="
              closePurchase()
              confettiStop()
              transactionClear()
              handleReset()
            "
          >
            Got It!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex"

export default {
  // props: ['closePurchase', 'id', 'price', 'priceWei', 'title', 'imageUrl'],
  props: {
    closePurchase: { type: Function, default: () => {} },
    id: { type: Number, default: 0 },
    price: { type: String, default: "" },
    priceWei: { type: Number, default: null },
    title: { type: String, default: "" },
    imageUrl: { type: String, default: "" }
  },
  data() {
    return {
      requiredNetwork: "",
      transactionOkay: false
      // desiredNetwork: "main"
      // showAddInterface: false,
      // customContractId: '',
    }
  },
  computed: {
    ...mapGetters({
      walletAddress: "walletStore/walletAddress",
      transactionStatus: "walletStore/transactionStatus",
      transactionId: "walletStore/transactionId",
      transactionError: "walletStore/transactionError",
      pendingToken: "walletStore/pendingToken",
      pendingCount: "walletStore/pendingCount"
    })
  },
  mounted() {
    this.setTransactionStatus("")
    const net = this.$config.requiredNetwork
    this.requiredNetwork = net
    console.log("object id", this.id)
    console.log("transaction", this.transactionId)
  },

  methods: {
    ...mapMutations({
      setTransactionStatus: "walletStore/setTransactionStatus"
    }),
    ...mapActions({
      purchaseToken: "walletStore/purchaseToken",
      trackTransaction: "walletStore/trackTransaction",
      handleReset: "walletStore/handleReset"
    }),
    getPendingText(pendingCount) {
      const string = "Your JOYtoy will be done in... "
      const count = pendingCount / 1000 || 0
      return pendingCount
        ? `${string} ${count}s`
        : "Your JOYtoy is being built!"
    },
    confettiPop() {
      this.$confetti.start({
        particles: [
          {
            type: "image",
            size: 25,
            url: "https://uploads-ssl.webflow.com/5c73606d331282a7a53d3df3/60cb94ec09a56d66dadc81f3_JOYfetti25px.png"
          },
          {
            type: "heart",
            size: 20
          },
          { type: "circle", size: 3 }
        ]
      })
    },
    confettiStop() {
      this.$confetti.stop()
    },
    openTracking() {
      const transactionSlug = this.transactionId.toString()
      window.open("https://etherscan.io/tx/" + transactionSlug)
    },
    transactionClear() {
      this.transactionOkay = !this.transactionOkay
    }
  }
}
</script>

<style lang="scss">
.modalContent {
  padding: 1em 0.75em 1em 0.75em;
  width: 100%;
  border: 4px solid black;
  border-radius: 50px;
  h2 {
    font-family: "VT323";
    font-weight: 400;
    margin: 0.5rem 0;
  }
}
.spaceContainer {
  width: 100%;
  margin: 0;
}
.modalActions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 -1rem 0;
  min-width: 100%;
}
@media (min-width: 510px) {
  .modalActions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}
.tokenStatus {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.statusText {
  text-transform: capitalize;
}
.statusError {
  justify-content: flex-end;
  font-size: 1.5rem;
  color: var(--danger-color, red);
  margin-left: 2rem;
}
.tokenPreview {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 1rem 0;
  border-top: 1px dashed black;
  border-bottom: 1px dashed black;
  padding: 0.5rem;
  .previewImage {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    img {
      width: 3rem;
      height: 3rem;
      object-fit: contain;
    }
  }
  .previewContent {
    .previewTitle {
      font-weight: bold;
      text-align: left;
    }
    .subtitle {
      font-size: 0.875rem;
      text-align: left;
    }
  }
}
.txContainer {
  font-family: Sniglet, sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  h3 {
    font-family: "VT323";
    font-weight: 400;
    font-size: 24px;
  }
  h4 {
    font-family: "VT323";
  }
  #gotIt {
    margin-top: 30px;
  }
  .pendingImage {
    img {
      margin: 10px;
      width: 6rem;
      height: 6rem;
      object-fit: contain;
    }
  }
}
.vidPlayer {
  margin: 10px 0 10px 0;
  overflow: hidden;
  height: 200px;
  height: 210px;
}
</style>
