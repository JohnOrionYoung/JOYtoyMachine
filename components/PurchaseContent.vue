<template>
  <div class="modalContent">
    <div class="top-right">
      <Button
        class="btn iconButton"
        tabindex="0"
        @click.native="$modal.hide(`info-modal${id}`)"
      >
        <IconClose />
      </Button>
    </div>

    <div v-if="!transactionStatus && !pendingToken" class="modalSection">
      <h3>Purchase JOYtoy</h3>
      <div class="tokenPreview">
        <div class="previewImage">
          <img :src="imageUrl" alt="token Image" />
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
      <div>You sure?</div>
      <div class="modalActions">
        <button
          class="button joy"
          @click="
            () =>
              purchaseToken({
                tokenId: id,
                requiredNetwork: requiredNetwork,
                priceWei: priceWei,
                walletAddress: walletAddress
              })
          "
        >
          Yes, gimme!
        </button>
        <button class="button joy invert" @click="closeAction">Cancel</button>
      </div>
    </div>

    <div v-if="transactionStatus" class="tokenStatus">
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
              closeAction()
            }
          "
        >
          CLOSE
        </button>
      </div>
    </div>
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
      <span>Confirm this transaction in your wallet to continue</span>
    </div>
    <div v-if="transactionStatus && transactionStatus === 'error'">
      <span v-if="!transactionError" class="statusError"
        >Something got weird.</span
      >
      <span v-if="transactionError" class="statusError">{{
        transactionError
      }}</span>
    </div>
    <div v-if="pendingToken && pendingToken === id">
      <Loading :text="getPendingText(pendingCount)" />
    </div>
    <div v-if="transactionId">TransactionId: {{ transactionId }}</div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex"
import tokenshop from "./../tokenshop.config"

export default {
  // props: ['closeAction', 'id', 'price', 'priceWei', 'title', 'imageUrl'],
  props: {
    closeAction: { type: Function, default: () => {} },
    id: { type: Number, default: 0 },
    price: { type: String, default: "" },
    priceWei: { type: Number, default: null },
    title: { type: String, default: "" },
    imageUrl: { type: String, default: "" }
  },
  data() {
    return {
      requiredNetwork: "",
      purchaseButtonText: tokenshop.ui.purchaseButtonText,
      cancelButtonText: tokenshop.ui.cancelButtonText
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
      const string = "Pending... "
      const count = pendingCount / 1000 || 0
      return pendingCount ? `${string} ${count}s` : ""
    }
  }
}
</script>

<style lang="scss">
.modalContent {
  padding: 1rem;
  width: 100%;
  border-top: 4px solid var(--brand-color);
  h3 {
    margin: 0.5rem 0;
  }
}
.modalActions {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.top-right {
  position: absolute;
  top: 0;
  right: 0;
  border-bottom-left-radius: 0.25rem;
  overflow: hidden;
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
  color: var(--danger-color, red);
}
.tokenPreview {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 1rem 0;
  background: rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
  border-radius: 0.5rem;
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
    }
    .subtitle {
      font-size: 0.875rem;
    }
  }
}
</style>
