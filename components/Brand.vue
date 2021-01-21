<template>
  <div class="Brand">
    <img :src="https://assets.website-files.com/5c73606d331282a7a53d3df3/5ffb98b2f2faea1a53240c1f_IMG_5303-p-1080.png" vif="logoUrl" class="brandImage" />
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
  width: 2rem;
  height: 4rem;
  object-fit: contain;
}
</style>
