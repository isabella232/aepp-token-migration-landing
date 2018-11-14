<template>
  <div class="app-content" :class="{light, grey, dark}">
    <div :class="{ container, flex}">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app-content',
  props: {
    container: Boolean,
    light: Boolean,
    grey: Boolean,
    dark: Boolean,
    flex: Boolean,
    left: Boolean
  }
}
</script>
<style lang="scss" scoped>
.app-content {
  position: relative;
  min-height: 100%;
  width: 100%;
  &.light {
    background-color: $white;
  }
  &.grey {
    background-color: $bg-color;
  }
  &.dark {
    background-color: $darkblue;
  }
}
.container {
  padding: 2rem 0 4rem 0;
  margin: 0 auto;
  width: 100%;
  max-width: 70rem;
  @include only-tablet {
    padding: 4rem 2rem;
  }
  @include only-phone {
    padding: 4rem 1rem;
  }
}
.flex {
  display: flex;
  height: 100%;
}

</style>
