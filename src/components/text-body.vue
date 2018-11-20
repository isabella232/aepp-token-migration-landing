<template>
    <article class="text-body">
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
  margin-top: $spacer-xl;
}

h1, h2, h3, h4 {
  @extend .title
}

h1 {
  @extend .title-sub
}

ul, ol, dl{
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
  & li{
    margin: .75rem 0;
  }
  & dt {
    font-weight: bold;
  }
  & dd {
    margin-left: 0;
    margin-bottom: 1rem;
  }
}

h2, h3, strong {
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1.5rem;
}

</style>
