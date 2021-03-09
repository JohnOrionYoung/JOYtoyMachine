<template>
  <div class="footerContainer">
    <div class="footerLinks">
      <div>
        <a target="_blank" :href="discord">Discord</a>
      </div>
      <div class="link">
        <a target="_blank" :href="youtube">YouTube</a>
      </div>
      <div class="link">
        <a target="_blank" :href="instagram">Instagram</a>
      </div>
      <div class="link">
        <a target="_blank" :href="twitter">Twitter</a>
      </div>
    </div>
    <div class="footerIcon">
      <a href="https://www.joy.world/about">
        <img :src="require(`../assets/JOYicon.png`)" />
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.footerContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2%;
}

.footerLinks {
  min-width: 60%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2rem;

  a {
    color: black;
    text-transform: uppercase;
    font-family: "VT323";
    font-size: 140%;
  }
}

.link {
  margin-left: 15px;
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
