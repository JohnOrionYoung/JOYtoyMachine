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
          />
        </div>
        <div v-if="tokenId === 200">
          <model-viewer
            class="viewerStyle"
            alt="JOYtoy"
            src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy2/JOYtoy2.glb"
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
          />
        </div>
        <div v-if="tokenId === 305">
          <model-viewer
            class="viewerStyle"
            alt="JOYtoy"
            src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy3/JOYtoy3.glb"
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
          />
        </div>
        <div v-if="tokenId === 500">
          <model-viewer
            class="viewerStyle"
            alt="JOYtoy"
            src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy4/JOYtoy4.glb"
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
          />
        </div>
        <div v-if="tokenId === 900">
          <model-viewer
            class="viewerStyle"
            alt="JOYtoy"
            src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy5/JOYtoy5.glb"
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
          />
        </div>
        <div v-if="tokenId === 981">
          <model-viewer
            class="viewerStyle"
            alt="JOYtoy"
            src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy6/JOYtoy6.glb"
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
          />
        </div>
        <div v-if="tokenId === 1022">
          <model-viewer
            class="viewerStyle"
            alt="JOYtoy"
            src="https://joyworld-bucket.storage.fleek.co/ipfs/QmYrVH14vnhCcKL2cZaNYw5qEHBYVkzS6tcY6sVEXUg2BM/JOYtoys/JOYtoy7/JOYtoy7.glb"
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
            ><button
              slot="ar-button"
              style="
                background-color: #ffe70d;
                font-family: VT323;
                font-size: 22px;
                font-color: #0060e1;
                height: 44px;
                border-radius: 22px;
                border: 4px;
                position: absolute;
                bottom: 20px;
                right: 20px;
              "
            >
              VIEW IN JOYVISION
            </button></model-viewer
          >
        </div>
        <!-- <button
            slot="ar-button"
            style="
              background-color: #ffe70d;
              font-family: VT323;
              font-size: 22px;
              font-color: #0060e1;
              height: 44px;
              border-radius: 22px;
              border: 4px;
              position: absolute;
              bottom: 20px;
              right: 20px;
            "
          >
            VIEW IN JOYVISION
          </button> -->
        <!-- </model-viewer> -->
      </div>
      <button
        id="closeVision"
        class="btn iconButton"
        @click="
          {
            closeVision()
          }
        "
      >
        <IconClose class="logo.dark.large" />
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
  padding: 1em 0.75em 1em 0.75em;
  width: 100%;
  border: 4px solid black;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vision-content {
  display: flex;
  flex-direction: column;
}
.model-view {
  min-width: 60%;
  min-height: auto;
}
.viewerStyle {
  margin: 15px auto;
  min-height: 350px;
}
#closeVision {
  border: none;
  background: none;
  size: 0;
  position: absolute;
  top: 25px;
  right: 25px;
}
#icon {
  width: 25px;
  height: auto;
}
</style>
