<template>
  <ol class="list-steps" :class="{ 'is-wide': wide, 'is-tall': tall}">
    <slot/>
  </ol>
</template>

<script>
export default {
  name: 'steps-list',
  props: {
    wide: Boolean,
    tall: Boolean
  }
}
</script>
<style lang="scss">
.list-steps {
  list-style: none;
  counter-reset: count-steps;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  @include phone-and-tablet {
    justify-content: space-around;
  }
}

.is-wide {
  flex-direction: column;
}

.is-tall {
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
