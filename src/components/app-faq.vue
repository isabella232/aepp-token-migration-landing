<template>
  <section class="faq" id="faq">
      <div class="faq__info">
        <slot name="info"/>
      </div>
      <div class="faq__q-a">
        <slot name="questions"/>
      </div>
  </section>
</template>
<script>
export default {
  name: 'app-faq'
}
</script>
<style lang="scss" scoped>
.faq {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: $spacer-max 0;

  &__info {
    width: 100%;
    margin-bottom: $spacer-l;
    @include tablet-and-desktop {
      width: 30%;
      margin-right: $spacer-xl;
    }
  }

  &__q-a {

    @include tablet-and-desktop {
      width: 60%;
      max-width: 55rem;
    }
  }
}
</style>
