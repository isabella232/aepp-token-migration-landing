<template>
  <main class="home">
      <header class="home-header" id="top">
        <div class="home-header__inner-wrapper">
          <figure class="home-header__logo">
            <router-link to="/index">
              <img :src="require('@/assets/logo.svg')" alt="æternity logo">
              æternity
            </router-link>
          </figure>
          <!-- <nav class="menu">
            <div v-if="!isDesktop" class="menu-icon" @click="toggleMenu">
              <ae-icon :name="`${open ? 'close' : 'burger'}`"/>
            </div>
            <ul class="main-nav" :class="[open || isDesktop ? 'is-open' : 'is-closed']">
              <li class="main-nav__item">
                <a href="#how-to-migrate">How to migrate</a>
              </li>
              <li class="main-nav__item">
                <a href="#road-map"> Roadmap</a>
              </li>
              <li class="main-nav__item">
                <a href="#see-migration-status">See migration status</a>
              </li>
              <li class="main-nav__item">
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </nav> -->
        </div>
      </header>
      <article class="text-body">
      <h1>Cookies Policy</h1>
      migrate.aeternity.com USES THE SO CALLED „COOKIES“. THEIR PURPOSE IS TO INDIVIDUALIZE AND IMPROVE YOUR USE OF THE WEBSITES. YOU CAN LEARN MORE ABOUT THE COOKIES AND THE WAY THEY FUNCTION IN THIS SECTION.
      The cookies are under the form of text files, representing small pieces of data sent from the websites to the user’s technical device (computer, mobile device, tablet, etc.). They are stored on the user’s technical device after accepting them and are used during browsing from this moment on. This allows the websites to memorize your actions and preferences for a fixed period of time. The main purpose is to allow easy and fast access to our services without the need for you to fill in the required information every time.

      In connection to cookies, we collect information to:
      <ul>
        <li>analyse the use on our website</li>
        <li>identify your preferences</li>
      </ul>
      <h2>The cookies we collect are:</h2>
      <h3>Google Analytics</h3>
      <p>
      Google Tag Manager <br>
      COOKIE NAME DESCRIPTION <br>
      Google Analytics  Google Analytics is an easy-to-use tool of Google, which assists website creators to track and support the website traffic. Google Analytics may collect personal data for the purposes of statistics in the website, without personally clarifying and identifying each visitor of Google. <br>
      Google Tag Manager  Google Tag Manager cookies allow for the easy inclusion and management of Google services such as Google Analytics. <br>
      Every user can control/ restrict and even delete the cookies, stored on their technical devices by following the necessary steps according to the settings to the devices. You can install different programs for the browsers you use to block cookies. In case you make any of these actions, it is possible that you may have to manually adjust them to your preferences. Please note that the restriction or refusal to use cookies may affect the full potential and use of our website.</p>

      <h3>Blocking Cookies</h3>
      <p>
      Most browsers allow you to refuse to accept cookies. For example:
      <ul>
        <li>in Internet Explorer you can refuse all cookies by clicking "Tools", "Internet Options", "Privacy", and selecting "Block all cookies" using the sliding selector.</li>
        <li>in Firefox you can block all cookies by clicking "Tools", "Options", and un-checking "Accept cookies from sites" in the "Privacy" box.</li>
        <li>in Google Chrome you can adjust your cookie permissions by clicking "Options", "Under the hood", Content Settings in the "Privacy" section. Click on the Cookies tab in the Content Settings.</li>
        <li>in Safari you can block cookies by clicking “Preferences”, selecting the “Privacy” tab and “Block cookies”.</li>
      </ul>
      Blocking all cookies will, however, have a negative impact upon the usability of many websites. If you block cookies, you may not be able to use certain features on the website (log on, access content, use search functions).</p>
    </article>
    <app-footer/>
  </main>
</template>
<script>
import AppFooter from '@/components/app-footer.vue'
export default {
  name: 'imprint',
  components: {
    AppFooter
  }
}
</script>
<style lang="scss">
  .text-body {
    max-width: 800px;
    margin: $spacer-xl;
    margin-top: 10%;
  }
  figure {
    margin: 0;
  }
</style>
