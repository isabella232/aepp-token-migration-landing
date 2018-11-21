<template>
  <ol class="phases">
    <slot/>
  </ol>
</template>

<script>
export default {
  name: 'phases'
}
</script>
<style lang="scss">
.phases {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: nowrap;
  @include phone-and-tablet {
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
