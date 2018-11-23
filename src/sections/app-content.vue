<template>
  <div class="app-content" :class="{
    'app-content_bg-light' :light,
    'app-content_bg-grey' : grey,
    'app-content_bg-dark' : dark}">
    <div
    :class="{
      'app-content__container' : container,
      'app-content__container_flex' : flex,
      'app-content__container_small' : small,
      'app-content__container_wide' : wide}">
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
    small: Boolean,
    wide: Boolean
  }
}
</script>
<style lang="scss" scoped>
.app-content {
  position: relative;
  min-height: 100%;
  width: 100%;
  &_bg-light {
    background-color: $white;
  }
  &_bg-grey {
    background-color: $bg-color;
  }
  &_bg-dark {
    background-color: $darkblue;
  }

  &__container {
  padding: $spacer-max 0;
  margin: 0 auto;
  width: 85%;
  max-width: 60rem;

    @include only-tablet {
      width: 100%;
      padding: 6rem 1.5rem;
    }

    @include only-phone {
      width: 100%;
      padding: 6rem 1.5rem;
    }

    &_flex {
      display: flex;
      height: 100%;
    }

    &_small {
      padding: 1.5rem;
        @include only-desktop {
          padding: 2rem 0;
        }
    }

    &_wide {
      width: 100%;
      @include only-desktop {
        max-width: 80%;
      }
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
}

</style>
