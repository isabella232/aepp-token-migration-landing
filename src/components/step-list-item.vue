<template>
  <li class="step-list-item">
    <figure class="step-list-item__media">
      <img :src="src" alt="alt">
    </figure>
    <article class="step-list-item__info">
      <div class="step-list-item__info-wrapper">
        <slot name="info"/>
      </div>
      <footer class="step-list-item__info-footer">
        <slot name="buttons"/>
      </footer>
    </article>
  </li>
</template>

<script>
export default {
  name: 'step-list-item',
  props: {
    isActive: Boolean,
    name: String,
    number: String,
    src: String,
    alt: String
  }
}
</script>
<style lang="scss">
.step-list-item {
  display: flex;
  box-shadow: $shadow_wide;
  margin-bottom: $spacer-xl;
  position: relative;
  width: 100%;
  flex-direction: column;
  background-color: $white;
  @include tablet-and-desktop {
    flex-direction: row;
    overflow: hidden;
    max-height: 300px;
  }
  @include tablet-and-desktop {
    margin-bottom: $spacer-xxl;
  }
  &__info {
    padding: $spacer-l;
    text-align: center;
    @include tablet-and-desktop {
      text-align: left;
      display: flex;
      flex-direction: column;
      padding: $spacer-l;
      width: 70%;
    }
    &-wrapper {
      @include tablet-and-desktop {
        margin: auto auto 0;
        width: 80%;
      }
    }
    &-footer {
      display: flex;
      justify-content: center;
      @include tablet-and-desktop {
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        margin: 0 0 auto;
      }
    }
  }
}

  .step-list-item {

    &__media {
      color: $darkgrey;
      position: relative;
      width: 100%;
      @include tablet-and-desktop {
        width: 30%;
      }
      & img {
        object-fit: fill;
        //height: 100%;
        @include tablet-and-desktop {
          object-fit: scale-down;
          width: 300px;
          object-position: top center;
        }
      }
    }
  }

</style>
