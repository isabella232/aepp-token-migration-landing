<template>
  <nav class="app-menu">
    <div v-if="!isDesktop" class="app-menu__icon" @click="toggleMenu">
      <ae-icon :name="`${open ? 'close' : 'burger'}`"/>
    </div>
    <ul class="app-menu__nav" :class="[open || isDesktop ? 'is-open' : 'is-closed']">
      <slot/>
    </ul>
  </nav>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

export default {
  name: 'app-menu',
  components: {
    AeIcon
  },
  data: function () {
    return {
      open: false,
      windowWidth: window.innerWidth,
      cta: true
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
    window.addEventListener('scroll', this.checkView)
  },
  computed: {
    isDesktop () {
      return this.windowWidth >= 1025
    }
  },
  methods: {
    toggleMenu () {
      this.open = !this.open
    }
  }
}
</script>
<style lang="scss" scoped>
.app-menu{

  &__icon {
    font-size: 1.5rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  &__nav {
  margin: 0;
  font-size: 0.8125rem;
  list-style: none;
  display: flex;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.08125em;

    @include phone-and-tablet {
      position: absolute;
      flex-direction: column;
      top: 0;
      right: 0;
      height: 100vh;
      z-index: 0;
      width: 0;
      text-align: right;
      background: $bg-color;
      transition: transform .3s ease;
      transform: translateX(+100%);
      overflow: hidden;
    }
  }
}

.is-open.app-menu__nav {
  transform: translateX(0);
  width: 100%;
}
</style>
