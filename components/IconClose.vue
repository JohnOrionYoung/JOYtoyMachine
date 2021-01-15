<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-square-x"
    :class="`${strokeClass} ${size}`"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#9E9E9E"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M10 10l4 4m0 -4l-4 4" />
  </svg>
</template>

<style>
.icon {
  stroke: var(--background-color, #eee);
}
.icon.light {
  stroke: var(--background-color, #eee);
}
.icon.dark {
  stroke: var(--ui-color, #111);
}
.icon.brand {
  stroke: var(--fill-color, #ccc);
}
.icon.danger {
  stroke: var(--danger-color, #ccc);
}
</style>
<script>
export default {
  props: {
    strokeClass: { type: String, default: "" },
    size: { type: String, default: "" }
  }
}
</script>
