<template>
  <div class="joy-vision">
    <div class="vision-content">
      <div class="model-view">
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
        <!-- <model-viewer
          src="https://joy-team-bucket.storage.fleek.co/ipfs/QmcuEBcpphcfEaqEYzkyFQueCAA2xsW5dk1Hr639hUuoBM/A%20Rose%20is%20a%20Smiley%20is%20a%20Rose.glb"
          alt="A 3D model of an astronaut"
          ar
          ar-modes="webxr scene-viewer quick-look"
          environment-image="neutral"
          auto-rotate
          camera-controls
        ></model-viewer> -->
        <model-viewer
          alt="Your JOYtoy has appeared"
          src="https://joyworld-bucket.storage.fleek.co/ipfs/QmWdn91cDZoWrkoCvQLV2z6ETE6LP3y6wBRGLcS7NY2ybf/JOYtoys/JOYtoy1/JOYtoy1.glb"
          poster="https://joyworld-bucket.storage.fleek.co/ipfs/QmWdn91cDZoWrkoCvQLV2z6ETE6LP3y6wBRGLcS7NY2ybf/JOYtoys/JOYtoy1/JOYtoy1.png"
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
        >
          <button
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
          </button>
        </model-viewer>
      </div>
      <button
        class="button joy invert"
        @click="
          {
            closeVision()
          }
        "
      >
        Close JOYvision
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closeVision: { type: Function, default: () => {} },
    id: { type: Number, default: 0 }
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
  margin: 15px auto;
  min-width: 60%;
  min-height: auto;
}
</style>
