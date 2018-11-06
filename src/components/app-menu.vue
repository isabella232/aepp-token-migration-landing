<template>
  <nav class="app-menu">
    <div v-if="!isDesktop" class="app-menu__icon" @click="toggleMenu">
      <ae-icon :name="`${open ? 'close' : 'burger'}`"/>
    </div>
    <ul class="app-menu__nav" :class="[open || isDesktop ? 'is-open' : 'is-closed']">
      <li class="app-menu__nav__item">
        <a href="#how-to-migrate">How to migrate</a>
      </li>
      <li class="app-menu__nav__item">
        <a href="#road-map"> Roadmap</a>
      </li>
      <li class="app-menu__nav__item">
        <a href="#see-migration-status">See migration status</a>
      </li>
      <li class="app-menu__nav__item">
        <a href="#faq">FAQ</a>
      </li>
    </ul>
  </nav>
</template>
<script>

  export default {
    name: 'app-menu'
    components: {
      AeIcon
    }
  }
</script>
<style lang="scss">
.app-menu{

  &__icon {
    font-size: 1.7rem;
  }

  &__nav {
    @include font-size(xs);
  list-style: none;
  display: flex;
  font-weight: 600;
  text-transform: uppercase;

  @include phone-and-tablet {
      @include font-size(s);
    position: absolute;
    flex-direction: column;
    top: 3rem;
    right: 0;
    height: 100vh;
    width: 0;
    text-align: right;
    background: $bg-color;
    transition: transform .3s ease;
    transform: translateX(+110%);
    overflow: hidden;
  }

  &__item {
    margin-right: $spacer-xl;
    &:last-child {
      margin-right: 0;
    }

      @include phone-and-tablet {
        padding: $spacer-m;
        margin: $spacer-m 0;

        &:first-child {
          margin-top: auto;

          &::before {
            content: '';
            display: block;
            margin-top: -3rem;
          }
        }

        &:last-child {
          margin-bottom: auto;
        }

        &:hover {
          background-color: $grey;
        }
      }
    }
  }
}


.is-open.app-menu-nav {
  transform: translateX(0);
  width: 100%;
}
</style>
