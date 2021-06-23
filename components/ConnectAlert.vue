<template>
  <div class="modalContent">
    <h1>Please connect MetaMask via 'Connect MetaMask' button at the top!</h1>
    <div class="modalActions">
      <button class="button joy invert" @click="closeConnect">Okay</button>
    </div>
  </div>
</template>

<style lang="scss">
.modalContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em 0.75em 1em 0.75em;
  text-align: center;
  width: 100%;
  border: 4px solid black;
  border-radius: 50px;
  h3 {
    margin: 0.5rem 0;
  }
}
.modalActions {
  width: 240px;
  padding-bottom: 10px;
}
</style>
<script>
export default {
  props: {
    closeConnect: { type: Function, default: () => {} }
  }
}
</script>
