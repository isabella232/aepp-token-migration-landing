<template>
  <li class="step-list-item"
      :class="{ 'is-active': isActive }"
  >
    <div class="step-list-item__index">
      <div class="step-list-item__inner-wrapper">
        <div class="step-list-item__index__text">{{ name }}</div>
        <div class="step-list-item__index__number">{{ number }}</div>
        <slot name="number"/>
      </div>
    </div>
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
    number: String
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

  &__inner-wrapper {
    margin: auto;
  }

  &__index {
    display: flex;
    padding: $spacer-m;
    @include tablet-and-desktop {
      text-align: center;
      padding: $spacer-l;
      position: relative;
    }

    &__text {
      @include font-size(s);
      font-weight: bold;
      display: block;
      margin: auto;
      @include tablet-and-desktop {
        font-weight: normal;
      }
    }
    &__number {
      font-weight: bold;
      line-height: .9em;
      margin-left: .4em;
      @include tablet-and-desktop {
        margin: 0;
        padding: $spacer-m;
        font-size: 8.5rem;
        display: block;
      }
    }
  }
  &__info {
    padding: $spacer-l;
    @include tablet-and-desktop {
      padding: $spacer-l;
      padding-left: $spacer-xl;
    }
  }
}

.is-primary {
  .step-list-item {
    flex-direction: column;
    background-color: $white;
    @include tablet-and-desktop {
      flex-direction: row;
    }
    &__index {
      //background-color: $magenta;
      color: $darkgrey;
      @include tablet-and-desktop {
        text-align: center;
        position: relative;
        width: 100%;
        max-width: 18rem;
        position: relative;
        &:after {
          content: '';
          width: 1px;
          height: 85%;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background-color: $grey;
          display: block;
        }
      }
    }
  }

}

.is-secondary {
  .step-list-item {
    flex-direction: column;
    text-align: center;
    @include tablet-and-desktop {
      width: 100%;
      max-width: 18rem;
    }
    @include only-desktop {
      margin-right: $spacer-l;
      &:last-child {
        margin-right: 0;
      }
    }

    &__index {
      background-size: cover;
      color: $white;
      margin-bottom: $spacer-l;
      position: relative;
      &:after {
        content: '';
        display: block;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
      }
      &__number {
        opacity: .3;
      }
      &__text {
        opacity: .3;
      }

    }
  }



  .is-active .step-list-item {
    &__index {

      &__number {
        opacity: 1;
      }
      &__text {
        opacity: 1;
      }
    }
  }
}

.phase-one .step-list-item__index{
  background-image: url('../assets/graphics/phase-1.png');
}
.phase-two .step-list-item__index{
  background-image: url('../assets/graphics/phase-2.png');
}
.phase-three .step-list-item__index{
  background-image: url('../assets/graphics/phase-3.png');
}
.phase-four .step-list-item__index{
  background-image: url('../assets/graphics/phase-4.png');
}

@include tablet-and-desktop {
  .is-primary .step-list-item:not(:last-child):after {
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
