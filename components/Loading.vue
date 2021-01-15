<template>
  <div class="Loading">
    <div class="loadingIcon">
      <IconLoading />
    </div>
    <span v-if="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: { text: { type: String, default: "" } }
}
</script>

<style lang="scss">
.Loading {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  .loadingIcon {
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    // animation: loadingRotate 1s ease-in-out 0 forwards both;
    animation-name: loadingRotate;
    animation-direction: forwards;
    animation-timing-function: linear;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
}
</style>
