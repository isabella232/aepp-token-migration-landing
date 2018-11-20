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
  margin: 0  auto $spacer-med ;
  max-width: 40rem;
  @include only-phone {
    padding: 0 $spacer-s;
    margin: 0  auto 4rem ;
  }

  &__footer {
    margin-top: $spacer-l;
    text-align: center;
  }
}
</style>
