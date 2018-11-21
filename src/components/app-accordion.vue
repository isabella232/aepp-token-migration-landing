<template>
  <div class="app-accordion" :class="{ 'is-open': open }">
    <div class="app-accordion__subject" @click="open = !open">
      <slot name="title"/>
      <transition name="slide-fade">
        <ae-icon :name="`${ open ? 'close' : 'plus'}`" fill="primary" size="2rem"/>
      </transition>
    </div>
    <transition name="slide-fade">
      <div v-show="open" class="app-accordion__content">
        <slot name="body"/>
      </div>
    </transition>
  </div>
</template>

<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

export default {
  name: 'app-accordion',
  components: {
    AeIcon
  },
  props: ['title', 'accordion'],
  data: function () {
    return { open: false }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>
<style lang="scss" scoped>
.app-accordion {
  margin-top: $spacer-m;
  padding-bottom: $spacer-m;
  width: 100%;
  text-align: left;
  &:not(:last-child){
    border-bottom: 2px solid $grey;
  }

  &__subject {
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    height: auto;
    & a {
      text-decoration: underline;
    }
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .3s ease-in-out;
  @include only-phone {
      transition: all .2s ease-in-out;
  }
  max-height: 300px;
}
.slide-fade-enter, .slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
