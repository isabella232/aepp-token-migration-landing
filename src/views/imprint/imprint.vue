<template>
  <main class="home">
    <app-view>
      <app-header/>
        <app-content container>
          <text-body >
            <h1>Cookies Policy</h1>
            <p>
              <a href="migrate.aeternity.com">migrate.aeternity.com </a><strong>USES THE SO CALLED „COOKIES“. THEIR PURPOSE IS TO INDIVIDUALIZE AND IMPROVE YOUR USE OF THE WEBSITES. YOU CAN LEARN MORE ABOUT THE COOKIES AND THE WAY THEY FUNCTION IN THIS SECTION.</strong>
              The cookies are under the form of text files, representing small pieces of data sent from the websites to the user’s technical device (computer, mobile device, tablet, etc.). They are stored on the user’s technical device after accepting them and are used during browsing from this moment on. This allows the websites to memorize your actions and preferences for a fixed period of time. The main purpose is to allow easy and fast access to our services without the need for you to fill in the required information every time.
            </p>
            <h3>In connection to cookies, we collect information to:</h3>
            <ul>
              <li>analyse the use on our website</li>
              <li>identify your preferences</li>
            </ul>
            <h3>The cookies we collect are:</h3>
            <ul>
              <li>Google Analytics</li>
              <li>Google Tag Manager</li>
            </ul>
            <h2>Cookie Name Description</h2>
            <p>
            Google Analytics  Google Analytics is an easy-to-use tool of Google, which assists website creators to track and support the website traffic.
            Google Analytics may collect personal data for the purposes of statistics in the website, without personally clarifying and identifying each visitor of Google. <br>
            Google Tag Manager  Google Tag Manager cookies allow for the easy inclusion and management of Google services such as Google Analytics. <br>
            Every user can control/ restrict and even delete the cookies, stored on their technical devices by following the necessary steps according to the settings to the devices. You can install different programs for the browsers you use to block cookies. In case you make any of these actions, it is possible that you may have to manually adjust them to your preferences. Please note that the restriction or refusal to use cookies may affect the full potential and use of our website.</p>

            <h3>Blocking Cookies</h3>
            <p>Most browsers allow you to refuse to accept cookies. For example:</p>
            <ul>
              <li>in Internet Explorer you can refuse all cookies by clicking "Tools", "Internet Options", "Privacy", and selecting "Block all cookies" using the sliding selector.</li>
              <li>in Firefox you can block all cookies by clicking "Tools", "Options", and un-checking "Accept cookies from sites" in the "Privacy" box.</li>
              <li>in Google Chrome you can adjust your cookie permissions by clicking "Options", "Under the hood", Content Settings in the "Privacy" section. Click on the Cookies tab in the Content Settings.</li>
              <li>in Safari you can block cookies by clicking “Preferences”, selecting the “Privacy” tab and “Block cookies”.</li>
            </ul>
            <p>
            Blocking all cookies will, however, have a negative impact upon the usability of many websites. If you block cookies, you may not be able to use certain features on the website (log on, access content, use search functions).</p>
          </text-body>
        </app-content>
      <app-footer/>
    </app-view>
  </main>
</template>
<script>
import AppView from '@/sections/app-view.vue'
import AppContent from '@/sections/app-content.vue'
import AppFooter from '@/sections/app-footer.vue'
import AppHeader from '@/sections/app-header.vue'
import TextBody from '@/components/text-body.vue'

export default {
  name: 'imprint',
  components: {
    AppHeader,
    AppFooter,
    AppView,
    AppContent,
    TextBody
  }
}
</script>
<style lang="scss"></style>
