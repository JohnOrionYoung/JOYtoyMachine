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
  padding: 1em 0.75em 1em 0.75em;
  width: 100%;
  border: 4px solid black;
  border-radius: 50px;
  h3 {
    margin: 0.5rem 0;
  }
}
.modalActions {
  margin: 0 -0.75rem -1rem -0.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
</style>
<script>
export default {
  props: {
    closeConnect: { type: Function, default: () => {} }
  }
}
</script>
