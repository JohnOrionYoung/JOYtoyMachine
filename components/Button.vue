<template>
  <button class="button" :class="`${mode}`">
    <slot />
  </button>
</template>

<style lang="scss">
.button {
  color: var(--background-color, #000);
  border: 0px solid var(--brand-color, #000);
  background: var(--brand-color, #000);
  // background: blue;
  padding: 0.25rem 1rem;
  font-weight: bold;
  &.joy {
    font-size: 40px;
    line-height: 1.5;
    display: flex;
    width: 100%;
    height: auto;
    margin: 10px;
    text-shadow: 0px 0px 20px rgb(255 231 13 / 42%);
    // padding-top: 12px;
    // padding-right: 10px;
    // padding-left: 10px;
    

    //JOY
    border: 4px solid var(--text-color,#000);
    border-color: #ffe70d;
    letter-spacing: 2px;

    flex-direction: row;

    justify-content: center;
    align-items: center;
    border-style: solid;
    // border-width: 4px;
    // border-color: #ff0004;
    border-radius: 50px;
    background-color: #0060e1;
    background-image: radial-gradient(
        circle farthest-corner at 50% 50%,
        rgba(0, 96, 225, 0.39) 39%,
        #005edb
      ),
      -webkit-gradient(linear, left top, left bottom, from(#003cb4), color-stop(8%, #0060e1), color-stop(27%, #01bde2), color-stop(66%, #5bb3ff), color-stop(88%, #0060e1), color-stop(101%, #004199));
    background-image: radial-gradient(
        circle farthest-corner at 50% 50%,
        rgba(0, 96, 225, 0.39) 39%,
        #005edb
      ),
      linear-gradient(
        180deg,
        #003cb4,
        #0060e1 8%,
        #01bde2 27%,
        #5bb3ff 66%,
        #0060e1 88%,
        #004199 101%
      );
    box-shadow: 2px 2px 7px 1px rgba(85, 85, 85, 0.59);
    font-family: "Cheee", sans-serif;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    &.invert {
      background: var(--background-color, #eee);
      color: var(--text-color, #000);
      border: 4px solid var(--text-color,#000);
      background: var(--background-color,#ffe70d);
      box-shadow: none;
    }
  }
}
</style>

<script>
export default {
  props: { mode: { type: String, default: "" } }
}
</script>
