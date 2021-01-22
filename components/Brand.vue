<template>
  <div class="Brand">
    <a href="https://www.joy.lol/">
    <img :src="logoUrl" vif="logoUrl" class="brandImage" />
    <span v-if="!logoUrl && brandName">{{ brandName }}</span>
  </div>
</template>

<script>
import tokenshop from "./../tokenshop.config"

export default {
  props: { mode: { type: String, default: "" } },
  data() {
    return {
      brandName: tokenshop.site.brandName,
      logoUrl: tokenshop.site.logoUrl
    }
  }
}
</script>

<style scoped lang="scss">
.Brand {
  font-weight: 700;
}
.brandImage {
  width: 100%;
  object-fit: contain;
}
</style>
