<template>
  <li>
    <a :href="url">
      <img :src="src" :alt="alt">
      {{ text }}
    </a>
  </li>
</template>
<script>
  export default {
    name: 'app-contact-item',
    props: {
      url: String,
      src: String,
      alt: String,
      text: String
    }
  }
</script>
