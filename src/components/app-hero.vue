<template>
  <header class="app-hero">
    <div class="app-hero__inner-wrapper">
      <slot/>
    </div>
    <figure class="app-hero__img">
      <img :src="require('../assets/graphics/galaxy.png')" alt="phase-1">
    </figure>
    <div class="app-hero__count">
      <div class="app-hero__count-wrapper">
        <p class="token-count">1.576.125</p>
        <p>AE migrated until now</p>
      </div>
      <div class="app-hero__line"></div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'app-hero',
  props: {
    title: String
  }
}
</script>
<style lang="scss" scoped>
.app-hero {
  position: relative;
  height: 100%;
  min-height: 90vh;
  background-color: $skyblue;
  display: flex;
  padding: $spacer-xl;
  text-align: left;
  margin-bottom: 75vh;
  @include only-phone {
    margin-bottom: 90vh;
    padding: $spacer-m;
  }

  &__img {
    z-index: 0;
    right: -10%;
    top: -5%;
    @include only-phone {
      right: -40%;
      width: 80%;
    }
  }

  &__inner-wrapper {
    max-width: 60em;
    margin: auto 0;
    @include only-phone {
      max-width: 70%;
      & h1 {
        width: 90%;
      }
    }
  }

  &__count {
    min-height: 75vh;
    position: absolute;
    background-color: $white;
    z-index: 1;
    bottom: -75vh;
     @include only-phone {
      min-height: 90vh;
      bottom: -90vh;
    }
    left: 0;
    width: 100%;
    display: flex;
    &-wrapper {
      margin: auto;
      background-color: $white;
      padding-top: 3em;
      padding-bottom: 0;
      text-align: center;
    }
  }

  &__line {
    width: 2px;
    background-color: $magenta;
    position: absolute;
    top: -3rem;
    bottom: -3rem;
    z-index: -1;
    left: 50%;
    transform: translate(-50%);
  }
}

.token-count{
  @include font-size(xxxxl);
  //line-height: 1em;
  font-weight: bold;
  color: $magenta;

}

.in-view .app-hero__img{
  position: fixed;
}
.out-of-view .app-hero__img{
  position: absolute;

}
</style>
