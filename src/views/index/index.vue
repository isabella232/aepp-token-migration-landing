<template>
  <main class="home">
    <app-view>
      <app-header>
        <template slot="menu">
          <app-menu>
            <app-menu-item
              src="//aepp-migrate.aeternity.com/#/status/result"
              name="Check my Migration"/>
            <app-menu-item
              src="//verify-data.aeternity.com"
              name="Check Payload"/>
          </app-menu>
        </template>
      </app-header>
      <article id="content">
        <app-hero :class="cta ? 'out-of-view' : 'in-view'">
          <template slot="text">
            <h1 class="title title-hero">
              Migrate your <span class="ae-brand">AE tokens</span> to the Mainnet
            </h1>
            <p class="hero-text">
              The æternity mainnet is almost here! You can begin migrating the AE tokens you own on Ethereum to the æternity mainnet! We will guide you through our secure migration process.
            </p>
          </template>
          <template slot="buttons" >
            <div class="button-wrapper" id="ctaBtn">
              <a href="//aepp-migrate.aeternity.com" target="_blank">
                <ae-button face="round" fill="primary" extend>
                  Start Migration
                </ae-button>
              </a>
            </div>
          </template>
        </app-hero>
        <app-content container grey>
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
              <steps-list :wide="true" >
                <step-list-item
                  :src="require('@/assets/graphics/step-01.svg')"
                  alt="Create an æternity account with AirGap Vault.">
                  <template slot="info">
                    <h4 class="title title-subcategory">
                      Create an æternity account with AirGap Vault.
                    </h4>
                    <p>
                     AirGap Vault is the secure way to create an æternity account. Install the Vault app on a mobile device and create a new æternity account. Alternatively, you can use our webwallet Base æpp (beta) for migrating small amounts of AE tokens.
                    </p>
                  </template>
                  <template slot="buttons">
                    <a class="steps-footer__cta" href="https://airgap.it/airgap-vault/" target="_blank">
                      <img :src="require('@/assets/graphics/airgap-logo.svg')" alt="airgap vault logo">
                    </a>
                     <a class="steps-footer__cta" href="https://base.aepps.com/" target="_blank">
                      <img :src="require('@/assets/graphics/base-aepp-logo.svg')" alt="base aepp logo">
                    </a>
                  </template>
                </step-list-item>
                <step-list-item
                  :src="require('@/assets/graphics/step-02.svg')"
                  alt="Create an æternity account with AirGap Vault">
                  <template slot="info">
                    <h4 class="title title-subcategory">
                      Transfer your Ethereum AE Tokens
                    </h4>
                    <p>
                      We advice you to transfer your Ethereum AE tokens to our Migration Contract, using MetaMask or MyEtherWallet. You will need a small amount of ETH on the same account as your Ethereum AE tokens to cover the transaction fee. <p class="ae-brand"><strong>Do NOT send AE tokens directly to the Migration Contract!</strong></p>
                    </p>
                  </template>
                  <template slot="buttons">
                    <a class="steps-footer__cta" href="https://metamask.io/" target="_blank">
                      <img :src="require('@/assets/graphics/metamask-fox.svg')" alt="MetaMask">
                    </a>
                    <a class="steps-footer__cta" href="https://myetherwallet.com/" target="_blank">
                      <img :src="require('@/assets/graphics/myetherwallet.svg')" alt="MyEtherWallet">
                    </a>
                  </template>
                </step-list-item>
                <step-list-item
                  :src="require('@/assets/graphics/step-03.svg')"
                  alt="Create an æternity account with AirGap Vault">
                  <template slot="info">
                    <h4 class="title title-subcategory">
                      The Migration Contract receives your Ethereum AE Tokens
                    </h4>
                    <p>
                      The AE Migration Contract receives your Ethereum AE tokens and ensures that they will be available on your on the æternity mainnet account.
                    </p>
                  </template>
                </step-list-item>
                <step-list-item
                  :src="require('@/assets/graphics/step-04.svg')"
                  alt="Create an æternity account with AirGap Vault">
                  <template slot="info">
                    <h4 class="title title-subcategory">
                      Your AE tokens become available on the æternity Mainnet
                    </h4>
                    <p>
                      Your tokens become accessible in the Mainnet according to the Migration Roadmap below.
                    </p>
                  </template>
                </step-list-item>
              </steps-list>
              <footer>
                <div class="bottom-cta" :class="cta ? 'out-of-view' : 'in-view'">
                  <div class="bottom-cta__btn">
                    <a href="//aepp-migrate.aeternity.com" target="_blank">
                      <ae-button face="round" fill="primary" extend>
                        Start Migration
                      </ae-button>
                    </a>
                  </div>
                </div>
              </footer>
            </article>
          </section>
        </app-content>
        <app-content container light>
          <section class="roadmap" id="road-map">
            <intro>
              <h2 class="title title-category">
                Migration Roadmap
              </h2>
              <p>
                The migration of AE tokens will take place according to the phases outlined below. The AE Migration Contract ‘collects’ the received tokens and ensures they are migrated to the Mainnet.
              </p>
            </intro>
            <phases>
              <phase-item
                number="0"
                :isCurrent="true"
                :src="require('@/assets/graphics/phase-1.png')"
                alt="Mainnet Launch"
                ends="Ends November 2018"
                >
                <h3 class="title title-small">
                  Mainnet Launch
                </h3>
                <p>
                  All tokens migrated prior to the Mainnet launch will be available on the Mainnet.
                </p>
              </phase-item>
              <phase-item
                number="1"
                :isCurrent="false"
                :src="require('@/assets/graphics/phase-2.png')"
                alt="1st Hardfork"
                ends="Ends February 2019"
                >
                <h3 class="title title-small">
                  1st Hardfork
                </h3>
                <p>
                  Will include all tokens migrated between the Mainnet launch and the 1st Hardfork.
                </p>
              </phase-item>
              <phase-item
                number="2"
                :isCurrent="false"
                :src="require('@/assets/graphics/phase-3.png')"
                alt="2nd Hardfork"
                ends="Ends May 2019"
                >
                <h3 class="title title-small">
                  2nd Hardfork
                </h3>
                <p>
                  Will include all tokens migrated between the 1st and 2nd Hardforks.
                </p>
              </phase-item>
              <phase-item
                number="3"
                :isCurrent="false"
                :src="require('@/assets/graphics/phase-4.png')"
                alt="3rd Hardfork"
                ends="Ends September 2019"
                >
                <h3 class="title title-small">
                  3rd Hardfork
                </h3>
                <p>
                  Will include all tokens migrated between the 2nd and 3rd Hardforks.
                </p>
              </phase-item>
            </phases>
          </section>
        </app-content>
        <app-content container grey>
          <app-faq>
            <template slot="info" class="faq__info">
              <h2 class="title title-category">F.A.Q.</h2>
              <p>
                The frequenlty asked questions can be found here. For more information, visit our <a href="https://forum.aeternity.com/t/token-migration-phase-0-support-and-faq/1275" target="_blank">forum</a>.
              </p>
            </template>
            <template slot="questions">
              <app-accordion>
                <template slot="title">
                  <h3 class="title title-tiny">
                    Why should I migrate my tokens before Mainnet launch (Phase 0)?
                  </h3>
                </template>
                <template slot="body">
                  <p>
                    After Mainnet Launch (Phase 0), all consecutive phases will require a hard fork in order for migrated AE tokens to become available on the Mainnet. All hard forks are subject to the willingness of miners and users to update their node software in order to follow the updated rules of the æternity network. The æternity Establishment and Foundation will support the forks, but it is up to the miner and user communities to determine if a fork will be successful or not. In addition to recently migrated AE tokens, the scheduled hard forks will also include protocol improvements which introduce new functionalities, features and optimizations.
                  </p>
                </template>
              </app-accordion>
              <app-accordion>
                <template slot="title">
                  <h3 class="title title-tiny">
                    What is æternity Mainnet?
                  </h3>
                </template>
                <template slot="body">
                  <p>
                    The æternity Mainnet is the open, public network where the AE tokens, smart contracts, oracles, state channels, naming system and all other technological features will be available for use. The Mainnet will be improved through scheduled hard forks, which will introduce newly migrated tokens and updated features and increased functionalities.
                  </p>
                </template>
              </app-accordion>
              <app-accordion>
                <template slot="title">
                  <h3 class="title title-tiny">
                    What is æternity's Genesis Block?
                  </h3>
                </template>
                <template slot="body">
                  <p>
                    The Genesis Block is the first block mined on the æternity Mainnet. It will include all AE tokens migrated before Mainnet launch. It will also include the messages created by users during the first Phase of æternity’s original campaign in 2017. The date and time of the Genesis Block is generally considered to be the official launch of any public blockchain platform.
                  </p>
                </template>
              </app-accordion>
              <app-accordion>
                <template slot="title">
                  <h3 class="title title-tiny">
                    What is a scheduled hard fork?
                  </h3>
                </template>
                <template slot="body">
                  <p>
                    A hard fork is a permanent divergence from the previous version of the blockchain, and nodes running previous versions will no longer be accepted by the newest version. A hard fork is not backwards compatible. Each of our scheduled hard forks will migrate tokens and add or expand features of the æternity blockchain that can only be implemented via a hard fork such as the governance system or the new virtual machine.
                  </p>
                </template>
              </app-accordion>
              <app-accordion>
                <template slot="title">
                  <h3 class="title title-tiny">
                    When will my tokens be on the Mainnet?
                  </h3>
                </template>
                <template slot="body">
                  <p>
                    AE tokens will not migrated immediately, but in phases. The Genesis Block, the first block of the æternity blockchain, will include all tokens migrated by users during Phase 0 (before Mainnet launch). Each of the subsequent three phases, with a timeframe of around 3 months, will end with a scheduled hard fork of the æternity blockchain. The scheduled hard fork will introduce the migrated tokens in the current Phase to the Mainnet.
                  </p>
                </template>
              </app-accordion>
              <app-accordion>
                <template slot="title">
                  <h3 class="title title-tiny">
                    What happens if I forget to migrate?
                  </h3>
                </template>
                <template slot="body">
                  <p>
                    You will still be able to migrate your AE tokens as long as you don’t use a smart contract to manage them. More information will follow in time.
                  </p>
                </template>
              </app-accordion>
            </template>
          </app-faq>
          <app-content container small>
            <div class="to-top">
              <a href="#top">
                <ae-button face="icon" fill="primary">
                  <ae-icon name="left-more" size="2rem"/>
                </ae-button>
              </a>
            </div>
          </app-content>
        </app-content>
        <app-footer/>
      </article>
    </app-view>
  </main>
</template>
<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import inViewport from 'in-viewport'
import AppFaq from '@/components/app-faq.vue'
import AppAccordion from '@/components/app-accordion.vue'

import AppMenu from '@/sections/app-menu.vue'
import AppMenuItem from '@/sections/app-menu-item.vue'
import AppView from '@/sections/app-view.vue'
import AppFooter from '@/sections/app-footer.vue'
import AppHeader from '@/sections/app-header.vue'
import AppContent from '@/sections/app-content.vue'

import AppHero from '@/components/app-hero.vue'
import StepsList from '@/components/steps-list.vue'
import StepListItem from '@/components/step-list-item.vue'
import Phases from '@/components/phases.vue'
import PhaseItem from '@/components/phase-item.vue'
import Intro from '@/components/intro.vue'

export default {
  name: 'index',
  components: {
    StepsList,
    StepListItem,
    Phases,
    PhaseItem,
    AppFaq,
    AppMenu,
    AppMenuItem,
    AppAccordion,
    Intro,
    AeButton,
    AeIcon,
    AppHero,
    AppFooter,
    AppView,
    AppContent,
    AppHeader
  },
  data: function () {
    return {
      open: false,
      windowWidth: window.innerWidth,
      cta: true
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
