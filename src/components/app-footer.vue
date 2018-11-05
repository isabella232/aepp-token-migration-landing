<template>
  <footer class="app-footer">
    <div>
      <ae-logo/>
      <blockquote class="title title-category app-footer__quote">
        Scalable smart contracts <br>
        interfacing with real-world data
      </blockquote>
    </div>
    <div class="app-footer__details">
      <small>&#xa9; aeternity <time>{{ year }}</time></small>
      <nav class="footer-nav">
        <router-link :to="{ name:'imprint' }" class="footer-nav__link">Imprint</router-link>
        <router-link to="/legal" class="footer-nav__link">Legal</router-link>
        <a href="https://forum.aeternity.com/t/ae-token-migration-questions" target="_blank" class="footer-nav__link footer-nav__link_last">Visit our forum</a>
      </nav>
    </div>
  </footer>
</template>
<script>
import AeLogo from '@/components/ae-logo.vue'

export default {
  name: 'app-footer',
  computed: {
    year() {
      return new Date().getFullYear()
    }
  },
  components: {
    AeLogo,
  }
}
</script>
<style lang="scss" scoped>
  .app-footer {
    background-color: $darkblue;
    padding: $spacer-l;
    color: $white;
    &__details {
      display: flex;
    }
    &__quote {
      margin-top: $spacer-m;
      margin-bottom: $spacer-l;
    }
  }
.footer-nav{
  display: flex;
  width: 100%;
  &__link{
     color: $white;
     display: inline-block;
     margin-right: $spacer-l;
     &_last {
      margin-right: 0;
      margin-left: auto;
     }
  }
}
small {
  display: block;
  font-size: 1rem;
  min-width: 8em;
  opacity: .7;
  margin-right: $spacer-l;
}
time {
  display: inline;
}
</style>
