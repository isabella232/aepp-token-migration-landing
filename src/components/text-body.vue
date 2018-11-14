<template>
    <article class="text-body">
      <h1 class="title title-sub">{{ title }}</h1>
      <slot/>
    </article>
</template>
<script>
export default {
  name: 'text-body',
  props: {
    title: String
  }

}
</script>
<style lang="scss">
  .text-body {
    max-width: 800px;
    margin-top: 7rem;
  }
  h1 {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
  ul, ol{
    margin: 0;
    padding: 0;
    margin-bottom: 1.5rem;
    & li{

    }
  }
  h2, h3, strong {
    font-size: 1rem;
    //font-weight: normal;
    margin-bottom: 0;
    margin-top: 1rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

</style>
