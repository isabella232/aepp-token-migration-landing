<template>
  <header class="app-header" id="top">
    <app-content container>
      <div class="app-header__inner-wrapper">
        <figure class="app-header__logo">
          <router-link to="/">
              <ae-logo-type/>
          </router-link>
        </figure>
        <slot name="menu"/>
      </div>
    </app-content>
  </header>
</template>
<script>
import AeLogoType from '@/components/ae-logo-type.vue'
import AppContent from '@/sections/app-content.vue'

export default {
  name: 'app-header',
  components: {
    AeLogoType,
    AppContent
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
  padding: 0 ;

  &__inner-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    font-weight: 600;
    & a {
      display: flex;
    }
  }
}
</style>
