<template>
  <div class="Footer">
    <div class="row full between">
      <!-- <Brand /> -->
      <div v-if="discord">
        <a target="_blank" :href="discord">Discord</a>
      </div>
      <div v-if="youtube">
        <a target="_blank" :href="youtube">YouTube</a>
      </div>
      <div v-if="instagram">
        <a target="_blank" :href="gram">Insta</a>
      </div>
      <div v-if="twitter">
        <a target="_blank" :href="twitter">Twitter</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.Footer {
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem;
  font-size: 0.75rem;
  a {
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex"
import tokenshop from "../tokenshop.config"

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({})
  },
  created() {
    this.brandName = tokenshop.site.brandName
    this.twitter = tokenshop.site.social.twitter
    this.instagram = tokenshop.site.social.instagram
    this.youtube = tokenshop.site.social.youtube
    this.discord = tokenshop.site.social.discord
  },

  methods: {
    ...mapMutations({}),

    ...mapActions({})
  }
}
</script>
