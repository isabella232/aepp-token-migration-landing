<template>
  <main class="home">
    <app-header/>
    <article id="content">
      <app-hero :class="cta ? 'in-view' : 'out-of-view'">
        <h1 class="title title-hero">
          Migrate your <span class="ae-brand">AE tokens</span> <br>
          to the Mainnet
        </h1>
        <p class="hero-text">
        æternity mainnet is almost here! The AE tokens you now own on Ethereum can soon be migrated to the æternity mainnet! We will guide you securely through the migration process.
        </p>
        <div class="button-wrapper" id="ctaBtn">
          <a href="//aepp-migrate.aeternity.com" target="_blank">
            <ae-button face="round" fill="primary" extend>
              Start Migration
            </ae-button>
          </a>
          <a href="//aepp-migrate.aeternity.com/#/status/result" target="_blank">
            <ae-button face="flat" fill="neutral" extend>
              Check my Migration
            </ae-button>
          </a>
        </div>
      </app-hero>
      <section class="migration-steps">
        <article>
          <intro id="how-to-migrate">
            <h2 class="title title-sub">
              How to migrate
            </h2>
            <p>
              All the AE Tokens that are going to be migrated with this tool, will be available in the Mainnet after a
              certain period of time.
            </p>
          </intro>
          <steps-list :primary="true" >
          <step-list-item number="1">
            <template slot="info">
              <h4 class="title title-subcategory">
                Create an æternity account with AirGap Vault.
              </h4>
              <p>
               Install Airgap Vault on a mobile device, the secure way to create an æternity account. You can also use our webwallet Baseæpp (beta), if you migrate small amounts of AE tokens.
              </p>
              <footer class="steps-footer">
                <a class="steps-footer__cta" href="https://airgap.it/#download" target="_blank">
                  <img :src="require('@/assets/graphics/airgap-logo.svg')" alt="airgap vault logo">
                </a>
                <!-- <a class="steps-footer__cta" href="#">
                  <img :src="require('@/assets/graphics/ledger-logo.svg')" alt="ledger logo">
                </a> -->
              </footer>
            </template>
          </step-list-item>
          <step-list-item number="2">
            <template slot="info">
              <h4 class="title title-subcategory">
                Access Ethereum AE Tokens
              </h4>
              <p>
                We advice you to transfer your Ethereum AE tokens with MetaMask or MyEtherWallet. You will need some ETH on the same account as your Ethereum AE tokens to cover the transaction fee.
              </p>
              <footer class="steps-footer">
                <a class="steps-footer__cta" href="https://metamask.io/" target="_blank">
                  <img :src="require('@/assets/graphics/metamask-fox.svg')" alt="airgap wallet logo"> Install MetaMask
                </a>
                <a class="steps-footer__cta" href="https://myetherwallet.com/" target="_blank">
                  <img :src="require('@/assets/graphics/myetherwallet.svg')" alt="ledger logo"> MyEtherWallet
                </a>
              </footer>
            </template>
          </step-list-item>
          <step-list-item number="3">
            <template slot="info">
              <h4 class="title title-subcategory">
                Transfer the desired amount of tokens to the Migration Contract
              </h4>
              <p>
                The AE Migration Contract migrates your Ethereum AE tokens and ensures that they will be available on your on the æternity mainnet account.
              </p>
              <footer class="steps-footer">
                <!-- <a class="steps-footer__cta" href="#">
                  <img :src="require('@/assets/graphics/airgap-logo.svg')" alt="airgap wallet logo">
                </a>
                <a class="steps-footer__cta" href="#">
                  <img :src="require('@/assets/graphics/ledger-logo.svg')" alt="ledger logo">
                </a> -->
              </footer>
            </template>
          </step-list-item>
          <step-list-item number="4">
            <template slot="info">
              <h4 class="title title-subcategory">
                Your tokens are now available on the æternity Mainnet
              </h4>
              <p>
                Your tokens will be accessible in the Mainnet following the Migration Roadmap below.
              </p>
              <footer class="steps-footer">
                <!-- <a class="steps-footer__cta" href="#">
                  <img :src="require('@/assets/graphics/airgap-logo.svg')" alt="airgap wallet logo">
                </a>
                <a class="steps-footer__cta" href="#">
                  <img :src="require('@/assets/graphics/ledger-logo.svg')" alt="ledger logo">
                </a> -->
              </footer>
            </template>
          </step-list-item>
          </steps-list>
          <footer>
          <intro>
            <h3 class="title title-category">
              Start Migrating
            </h3>
            <p>
              All the AE Tokens that are going to be migrated with this tool, will be available in the Mainnet after a
              certain period of time.
            </p>
            <div class="line"></div>
            <div class="bottom-cta" :class="cta ? 'in-view' : 'out-of-view'">
              <div class="bottom-cta__btn">
                <a href="//aepp-migrate.aeternity.com" target="_blank">
                  <ae-button face="round" fill="primary" extend>
                    Start Migration
                  </ae-button>
                </a>
              </div>
            </div>
          </intro>
          </footer>
        </article>
      </section>
      <section class="roadmap" id="road-map">
        <intro>
          <h2 class="title title-category">
            Migration Roadmap
          </h2>
          <p>
            All tokens will not migrated immediately, but will be done in phases. The AE Migration Contract ‘collects’ the received tokens and migrates them in the Mainnet, in the following three phases.
          </p>
        </intro>
        <steps-list :secondary="true">
          <step-list-item name="Current Phase" number="0" :isActive="true" class="phase-one">
            <template slot="number">
              Ends November ‘18
            </template>
            <template slot="info">
              <h3 class="title title-small">
                Mainnet Launch
              </h3>
              <p>
                Will include all tokens migrated in phase 0 before Mainnet launch
              </p>
            </template>
          </step-list-item>
          <step-list-item name="Phase" number="1" class="phase-two">
            <template slot="number">
              Ends February ‘19
            </template>
            <template slot="info">
              <h3 class="title title-small">
                1st Hardfork
              </h3>
              <p>
               Will include all tokens migrated between Mainnet launch and the 1st Hardfork
              </p>
            </template>
          </step-list-item>
          <step-list-item name="Phase" number="2" class="phase-three">
            <template slot="number">
              Ends May ‘19
            </template>
            <template slot="info">
              <h3 class="title title-small">
                2nd Hardfork
              </h3>
              <p>
                Will include all tokens migrated between the 1st and 2nd Hardfork
              </p>
            </template>
          </step-list-item>
          <step-list-item name="Phase" number="3" class="phase-four">
            <template slot="number">
              Ends September ‘19
            </template>
            <template slot="info">
              <h3 class="title title-small">
                3rd Hardfork
              </h3>
              <p>
                Will include all tokens migrated between the 2nd and 3rd Hardfork
              </p>
            </template>
          </step-list-item>
        </steps-list>
      </section>
      <section class="faq" id="faq">
        <article class="faq__inner-wrapper">
          <div class="faq__info">
            <h2 class="title title-category">F.A.Q.</h2>
            <p>
              The frequenlty asked questions can be found here. For more information, visit our forum.
            </p>
          </div>
          <div class="faq__q-a">
            <app-accordion>
              <template slot="title">
                <h3 class="title title-tiny">
                  What’s mainnet?
                </h3>
              </template>
              <template slot="body">
                <p>
                  Mainnet is æternity’s Mainnet, which will launch soon. In order to get your tokens spawned there, you need to follow the Token Migration tutorial.
                </p>
              </template>
            </app-accordion>
            <app-accordion>
              <template slot="title">
                <h3 class="title title-tiny">
                  What’s my ETH account?
                </h3>
              </template>
              <template slot="body">
                <p>
                  Your ETH account is your Ethereum address where you are holding the AE ERC-20 Tokens, this is the address from which you need to transfer the tokens in order to receive them in the Mainnet.
                </p>
              </template>
            </app-accordion>
            <app-accordion>
              <template slot="title">
                <h3 class="title title-tiny">
                  What’s my æternity account?
                </h3>
              </template>
              <template slot="body">
                <p>
                  Your æternity account is the account you create with the AirGap Vault or the Ledger. This is your address on the Mainnet
                </p>
              </template>
            </app-accordion>
            <app-accordion>
              <template slot="title">
                <h3 class="title title-tiny">
                  When can I expect my tokens in the Mainnet?
                </h3>
              </template>
              <template slot="body">
                <p>
                 Getting the tokens in the Mainnet, depends on when you do the migration process. The first phase ends at Mainnet launch. All the migrated tokens until then will be available in the Genesis block. Tokens migrated after that will be available in the Mainnet at the 1st Hardfork. Migrated tokens between the 1st and 2nd Hardfork will be available at the 2nd Hardfork. The tokens migrated between the 2nd and 3rd Hardfork will be in the Mainnet at the 3rd Hardfork.
                </p>
              </template>
            </app-accordion>
            <app-accordion>
              <template slot="title">
                <h3 class="title title-tiny">
                  Where can I find more information about the Token Migration?
                </h3>
              </template>
              <template slot="body">
                <p>
                 We have created a forum thread where you can ask questions about the Token Migration. We will be of assistance to help you there. <a href="https://forum.aeternity.com/t/ae-token-migration-questions" target="_blank">Visit our forum</a>
                </p>
              </template>
            </app-accordion>
          </div>
        </article>
        <div class="to-top">
          <a href="#top">
            <ae-button face="icon" fill="primary">
              <ae-icon name="left-more" size="2rem"/>
            </ae-button>
          </a>
        </div>
      </section>
      <app-footer/>
    </article>
  </main>
</template>
<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import inViewport from 'in-viewport'
import AppAccordion from '@/components/app-accordion.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeader from '@/components/app-header.vue'
import AppHero from '@/components/app-hero.vue'
import StepsList from '@/components/steps-list.vue'
import StepListItem from '@/components/step-list-item.vue'
import Intro from '@/components/intro.vue'

export default {
  name: 'index',
  components: {
    StepsList,
    StepListItem,
    AppAccordion,
    Intro,
    AeButton,
    AeIcon,
    AppHero,
    AppFooter,
    AppHeader
  },
  data: function () {
    return {
      open: false,
      windowWidth: window.innerWidth,
      cta: false
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
    window.addEventListener('scroll', this.checkView)
  },
  computed: {
    isDesktop () {
      return this.windowWidth >= 1000
    }
  },
  methods: {
    toggleMenu () {
      this.open = !this.open
    },
    checkView () {
      var elem = document.getElementById('ctaBtn')
      window.addEventListener('scroll', () => {
        this.cta = inViewport(elem, { offset: 80 })
      })
    }
  }
}
</script>
<style src="./index.scss" lang="scss"></style>
