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
        The æternity mainnet is almost here! You can begin migrating the AE tokens you own on Ethereum to the æternity mainnet! We will guide you through our secure migration process.
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
              Migration Steps
            </h2>
            <p>
              All AE Tokens migrated with this tool prior to the Mainnet launch will be available on the Mainnet. Token migration takes place in four steps.
            </p>
          </intro>
          <steps-list :primary="true" >
          <step-list-item number="1">
            <template slot="info">
              <h4 class="title title-subcategory">
                Create an æternity account with AirGap Vault.
              </h4>
              <p>
               Airgap Vault is the secure way to create an æternity account. Install the Vault app on a mobile device and create a new æternity account. Alternatively, you can use our webwallet Baseæpp (beta) for migrating small amounts of AE tokens.
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
                Transfer your Ethereum AE Tokens
              </h4>
              <p>
                We advice you to transfer your Ethereum AE tokens to our Migration Contract, using MetaMask or MyEtherWallet. You will need a small amount of ETH on the same account as your Ethereum AE tokens to cover the transaction fee.
              </p>
              <footer class="steps-footer">
                <a class="steps-footer__cta" href="https://metamask.io/" target="_blank">
                  <img :src="require('@/assets/graphics/metamask-fox.svg')" alt="airgap wallet logo">MetaMask
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
                The Migration Contract receives your Ethereum AE Tokens
              </h4>
              <p>
                The AE Migration Contract receives your Ethereum AE tokens and ensures that they will be available on your on the æternity mainnet account.
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
                Your AE tokens become available on the æternity Mainnet
              </h4>
              <p>
                Your tokens become accessible in the Mainnet according to the Migration Roadmap below.
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
              All the AE Tokens that are going to be migrated with this tool, will be available in the Mainnet after a certain period of time.
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
            The migration of AE tokens will take place according to the phases outlined below. The AE Migration Contract ‘collects’ the received tokens and ensures they are migrated to the Mainnet.
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
                All tokens migrated prior to the Mainnet launch will be available on the Mainnet.
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
               Will include all tokens migrated between the Mainnet launch and the 1st Hardfork.
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
                Will include all tokens migrated between the 1st and 2nd Hardforks.
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
                Will include all tokens migrated between the 2nd and 3rd Hardforks.
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
              You can find the answers to the most frequently asked questions here. For more information, <a href="https://forum.aeternity.com/t/ae-token-migration-questions" target="_blank">visit our forum</a>.
            </p>
          </div>
          <div class="faq__q-a">
            <app-accordion>
              <template slot="title">
                <h3 class="title title-tiny">
                  What is a "mainnet"?
                </h3>
              </template>
              <template slot="body">
                <p>
                  Mainnet here refers to æternity's Mainnet: the network on which AE token transactions will take place. To get your tokens spawned there, to follow the Token Migration tutorial.
                </p>
              </template>
            </app-accordion>
            <app-accordion>
              <template slot="title">
                <h3 class="title title-tiny">
                  What is my ETH account?
                </h3>
              </template>
              <template slot="body">
                <p>
                  Your ETH account is the Ethereum account address, where you are holding your AE ERC-20 Tokens. This is the address you need to transfer your Ethereum AE tokens from, in order for the AE tokens to be available in the Mainnet.
                </p>
              </template>
            </app-accordion>
            <app-accordion>
              <template slot="title">
                <h3 class="title title-tiny">
                  What is my æternity account?
                </h3>
              </template>
              <template slot="body">
                <p>
                  Your æternity account is the account you will create with the AirGap Vault app, a Ledger, our out Base æpp (beta). This is your address on the æternity Mainnet.
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
                 Getting the tokens in the Mainnet, depends on when you go through the migration process. The first phase ends at the Mainnet launch. All Ethereum AE tokens sent to the Migration Contract prior to the Mainnet launch will be available in the Genesis block. Tokens migrated after that point will be available in the Mainnet at the 1st Hardfork. Tokens migrated between the 1st and 2nd Hardforks will be available at the 2nd Hardfork. Tokens migrated between the 2nd and 3rd Hardforks will be in the Mainnet at the 3rd Hardfork.
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
                 We have created a forum thread where you can ask questions related to the Token Migration procedure. We will provide the help you need there. <a href="https://forum.aeternity.com/t/ae-token-migration-questions" target="_blank">Visit our forum</a>
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
