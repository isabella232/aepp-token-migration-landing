<template>
  <li class="step-list-item">
    <figure class="step-list-item__media">
      <img :src="src" alt="alt">
    </figure>
    <article class="step-list-item__info">
      <slot name="info"/>
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
  @include tablet-and-desktop {
    margin-bottom: $spacer-xl;
  }
  &__info {
    padding: $spacer-l;
    @include tablet-and-desktop {
      padding: $spacer-l;
      padding-left: $spacer-xl;
      padding-bottom: 0;
      width: 65%;
    }
  }
}

  .step-list-item {
    flex-direction: column;
    background-color: $white;
    @include tablet-and-desktop {
      flex-direction: row;
      overflow: hidden;
    }
    &__media {
      color: $darkgrey;
      position: relative;
      width: 100%;
      //height: 300px;
      min-height: 290px;
      //padding-bottom: $spacer-l;
      @include tablet-and-desktop {
        width: 35%;
      }
    &:after { // line splitting info image
      content: '';
      position: absolute;
      background-color: $grey;
      display: block;

        @include tablet-and-desktop { // line vertical
          width: 1px;
          top: 50%;
          right: - $spacer-m;
          transform: translateY(-50%);
          height: 85%;
          }
      }
      & img {
        object-fit: cover;
        height: 100%;
        @include tablet-and-desktop {
          object-fit: cover;
        }
      }
    }
  }

@include tablet-and-desktop {
  .step-list-item:not(:last-child):after {
    content: '';
    height: $spacer-xl;
    width: 2px;
    display: block;
    background-color: $magenta;
    position: absolute;
    bottom: -$spacer-xl;
    left: 50%;
    transform: translate(-50%);
  }
}

</style>
