<template>
  <div class="intro">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'intro'
}
</script>
<style lang="scss" scoped>
.intro {
  text-align: center;
  margin: $spacer-max auto;
  @include only-phone {
    padding: 0 $spacer-s;
  }

  &__footer {
    margin-top: $spacer-l;
    text-align: center;
  }
}
</style>
