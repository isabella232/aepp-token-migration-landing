<template>
  <li class="app-menu-item">
    <a :href="src" target="_blank">{{ name }}</a>
  </li>
</template>
<script>
export default {
  name: 'app-menu-item',
  props: {
    src: String,
    name: String
  }
}
</script>
<style lang="scss" scoped>
.app-menu-item {
    margin-right: $spacer-xl;
    letter-spacing: 0.08em;
    &:last-child {
      margin-right: 0;
    }
      @include phone-and-tablet {
        padding: 0 1.5rem;
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
</style>
