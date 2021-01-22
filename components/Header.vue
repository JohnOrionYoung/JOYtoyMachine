<template>
  <header class="Header">
      <Brand />
    </div>    
  </header>
</template>

<style lang="scss">
.Header {
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  .accountWrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .networkLabel {
    border: 1px solid var(--ui-color, #000);
    font-size: 0.75rem;
    padding: 0 0.5rem;
    line-height: 1.5;
    border-radius: 0.25rem;
  }
}
</style>
