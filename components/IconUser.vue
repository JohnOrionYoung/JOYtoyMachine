<template>
  <svg
    :class="`${strokeClass} ${size}`"
    xmlns="http://www.w3.org/2000/svg"
    class="icon user icon-tabler icon-tabler-user"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="7" r="4" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>
</template>

<style>
.icon.user {
  stroke: var(--text-color, #eee);
}
.icon.user.ui {
  stroke: var(--ui-color, #eee);
}
.icon.user.text {
  stroke: var(--text-color, #111);
}
.icon.user.brand {
  stroke: var(--brand-color, #ccc);
}
</style>
<script>
// https://tablericons.com/
export default {
  props: {
    strokeClass: { type: String, default: "" },
    size: { type: String, default: "" }
  }
}
</script>
