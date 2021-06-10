<template>
  <div>
    <script
      type="module"
      src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
    ></script>
    <model-viewer
      src="https://joy-team-bucket.storage.fleek.co/ipfs/QmcuEBcpphcfEaqEYzkyFQueCAA2xsW5dk1Hr639hUuoBM/A%20Rose%20is%20a%20Smiley%20is%20a%20Rose.glb"
      alt="A 3D model of an astronaut"
      ar
      ar-modes="webxr scene-viewer quick-look"
      environment-image="neutral"
      auto-rotate
      camera-controls
    ></model-viewer>
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

<style lang="scss" scoped></style>
