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
  border-radius: 8px;
  margin-bottom: $spacer-xl;
  position: relative;
  width: 100%;
  flex-direction: column;
  background-color: $white;
  @include tablet-and-desktop {
    flex-direction: row;
    overflow: hidden;
    min-height: 300px;
  }
  @include tablet-and-desktop {
    margin-bottom: $spacer-xxl;
  }
  &__info {
    padding: $spacer-m;
    text-align: left;
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
        //width: 80%;
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
      @include only-tablet {
        width: 40%;
        display: flex;
        align-items: center;
      }
      @include only-desktop {
        width: 40%;
      }
      & img {
        object-fit: fill;

        @include only-tablet {
          object-fit: none;
          width: 100%;
          //height: 100%;
          object-position: top;
        }
      }
    }
  }

</style>
