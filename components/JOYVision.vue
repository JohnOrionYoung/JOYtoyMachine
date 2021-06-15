<template>
  <div class="joy-vision">
    <div class="vision-content">
      <div class="model-view">
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        />
        <div v-if="tokenId === 1">
          <model-viewer
            class="viewerStyle"
            alt="JOYtoy"
            src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy1/JOYtoy1.glb"
            ios-src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy1/JOYtoy1.usdz"
            poster="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy1/JOYtoy1.png"
            preload
            reveal-when-loaded
            camera-controls
            auto-rotate
            autoplay
            exposure="1.2"
            shadow-intensity=".0"
            shadow-softness=".0"
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="auto"
            environment-image="neutral"
            ><button slot="ar-button" class="launchAR">
              VIEW IN JOYVISION
            </button></model-viewer
          >
        </div>
        <div v-if="tokenId === 200">
          <model-viewer
            class="viewerStyle"
            alt="JOYtoy"
            src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy2/JOYtoy2.glb"
            ios-src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy2/JOYtoy2.usdz"
            poster="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy2/JOYtoy2.png"
            preload
            reveal-when-loaded
            camera-controls
            auto-rotate
            autoplay
            exposure="1.2"
            shadow-intensity=".0"
            shadow-softness=".0"
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="auto"
            environment-image="neutral"
            ><button slot="ar-button" class="launchAR">
              VIEW IN JOYVISION
            </button></model-viewer
          >
        </div>
        <div v-if="tokenId === 305">
          <model-viewer
            class="viewerStyle"
            alt="JOYtoy"
            src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy3/JOYtoy3.glb"
            ios-src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy3/JOYtoy3.usdz"
            poster="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy3/JOYtoy3.png"
            preload
            reveal-when-loaded
            camera-controls
            auto-rotate
            autoplay
            exposure="1.2"
            shadow-intensity=".0"
            shadow-softness=".0"
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="auto"
            environment-image="neutral"
            ><button slot="ar-button" class="launchAR">
              VIEW IN JOYVISION
            </button></model-viewer
          >
        </div>
        <div v-if="tokenId === 500">
          <model-viewer
            class="viewerStyle"
            alt="JOYtoy"
            src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy4/JOYtoy4.glb"
            ios-src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy4/JOYtoy4.usdz"
            poster="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy4/JOYtoy4.png"
            preload
            reveal-when-loaded
            camera-controls
            auto-rotate
            autoplay
            exposure="1.2"
            shadow-intensity=".0"
            shadow-softness=".0"
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="auto"
            environment-image="neutral"
            ><button slot="ar-button" class="launchAR">
              VIEW IN JOYVISION
            </button></model-viewer
          >
        </div>
        <div v-if="tokenId === 900">
          <model-viewer
            class="viewerStyle"
            alt="JOYtoy"
            src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy5/JOYtoy5.glb"
            ios-src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy5/JOYtoy5.usdz"
            poster="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy5/JOYtoy5.png"
            preload
            reveal-when-loaded
            camera-controls
            auto-rotate
            autoplay
            exposure="1.2"
            shadow-intensity=".0"
            shadow-softness=".0"
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="auto"
            environment-image="neutral"
            ><button slot="ar-button" class="launchAR">
              VIEW IN JOYVISION
            </button></model-viewer
          >
        </div>
        <div v-if="tokenId === 981">
          <model-viewer
            class="viewerStyle"
            alt="JOYtoy"
            src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy6/JOYtoy6.glb"
            ios-src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy6/JOYtoy6.usdz"
            poster="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy6/JOYtoy6.png"
            preload
            reveal-when-loaded
            camera-controls
            auto-rotate
            autoplay
            exposure="1.2"
            shadow-intensity=".0"
            shadow-softness=".0"
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="auto"
            environment-image="neutral"
            ><button slot="ar-button" class="launchAR">
              VIEW IN JOYVISION
            </button></model-viewer
          >
        </div>
        <div v-if="tokenId === 1022">
          <model-viewer
            class="viewerStyle"
            alt="JOYtoy"
            style="border-radius: 50px"
            src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy7/JOYtoy7.glb"
            ios-src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy7/JOYtoy7.usdz"
            poster="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy7/JOYtoy7.png"
            preload
            reveal-when-loaded
            camera-controls
            auto-rotate
            autoplay
            exposure="1.2"
            shadow-intensity=".0"
            shadow-softness=".0"
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="auto"
            environment-image="neutral"
            ><button slot="ar-button" class="launchAR">
              VIEW IN JOYVISION
            </button></model-viewer
          >
        </div>
      </div>
      <button
        class="closeVision"
        @click="
          {
            closeVision()
          }
        "
      >
        <IconClose class="icon" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closeVision: { type: Function, default: () => {} },
    id: { type: Number, default: 0 },
    tokenId: { type: Number, default: 0 }
  }
}
</script>

<style lang="scss" scoped>
.joy-vision {
  min-height: auto;
  padding: 1em 0.75em 1em 0.75em;
  width: 100%;
  border: 4px solid black;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vision-content {
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.model-view {
  min-width: 60%;
  min-height: auto;
}
.viewerStyle {
  margin: 15px auto;
  min-height: 400px;
  width: 92%;
  border: 4px solid black;
}
.launchAR {
  background-color: #ffe70d;
  padding: 5px 15px 5px 15px;
  font-family: Sniglet, sans-serif;
  font-size: 16px;
  height: 44px;
  border-radius: 22px;
  border: black solid 4px;
  position: absolute;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: -40px;
  text-align: center;
}

.closeVision {
  border: none;
  background: none;
  position: absolute;
  top: 12px;
  right: 55px;
}

@media screen and (min-width: 600px) {
  .launchAR {
    background-color: #ffe70d;
    padding: 5px 15px 5px 15px;
    font-family: Sniglet, sans-serif;
    font-size: 16px;
    height: 44px;
    border-radius: 22px;
    border: black solid 4px;
    position: absolute;
    position: absolute;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: -55px;
    text-align: center;
  }
}
</style>
