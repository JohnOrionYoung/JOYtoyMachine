<template>
  <div class="Products" :class="`${mode}`">
    <slot />
  </div>
</template>

<style lang="scss">
.Products {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  flex-wrap: wrap;
}
</style>

<script>
export default {
  props: {
    mode: { type: String, default: "" }
  }
}
</script>
