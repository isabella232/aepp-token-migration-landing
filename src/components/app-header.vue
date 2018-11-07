<template>
  <header class="app-header" id="top">
    <div class="app-header__inner-wrapper">
      <figure class="app-header__logo">
        <router-link to="/">
          <div class="logo">
            <ae-logo/>
            <span class="logo-type">æternity
              <span class="logo-type__txt">Blockchain</span>
            </span>
          </div>
        </router-link>
      </figure>
      <slot name="menu"/>
    </div>
  </header>
</template>
<script>
import AeLogo from '@/components/ae-logo.vue'

export default {
  name: 'app-header',
  components: {
    AeLogo
  }
}
</script>
<style lang="scss">
  .app-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  padding: $spacer-xl;
  padding-bottom: 0;

  @include phone-and-tablet {
    padding: $spacer-m;
  }

  &__inner-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    font-weight: 600;
    @include font-size(s);
    & a {
      display: flex;
      & img {
        max-width: 3rem;
        margin-right: $spacer-m;
      }
    }
  }
}

.logo{
  display: flex;
  align-items: center;
  &-type {
    font-size: 1.2rem;
    margin-left: .5rem;
    position: relative;
    &__txt {
    font-size: .2em;
    text-transform: uppercase;
    letter-spacing: .5em;
    display: block;
    position: absolute;
    top: .7rem;
    left: 0;

    }
  }
}
</style>
