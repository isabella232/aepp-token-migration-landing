<template>
  <main class="home">
    <app-view>
      <app-header>
        <template slot="menu">
          <app-menu>
            <app-menu-item
              src="//aepp-migrate.aeternity.com/#/status/result"
              name="Verify my migration"/>
            <app-menu-item
              src="//verify-data.aeternity.com"
              name="Check Dataload"/>
          </app-menu>
        </template>
      </app-header>
      <article id="content">
        <app-hero :class="cta ? 'out-of-view' : 'in-view'">
          <template slot="text">
            <h1 class="title title-hero">
              Migrate your <span class="ae-brand">AE Tokens</span> to the Mainnet now
            </h1>
            <p class="text text-intro text-intro_light">
              It’s happening, æternity Mainnet is live. Time to migrate your AE tokens from the Ethereum net to æternity Mainnet. We’ll help you get it done in 6 steps.
            </p>
            <p>
              <strong class="ae-brand">The migration is now in Phase 1.</strong>
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
            <div class="button-wrapper">
              <a href="#phases" v-smooth-scroll="{ duration: 1000, offset: -50 }">
                <ae-button face="flat"  extend>
                  What are the Phases?
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
                  Migration Process
                </h2>
                <p class="text text-intro">
                  This is what you can expect in the token migration process.
                </p>
              </intro>
              <steps-list :wide="true" >
                <step-list-item
                  :src="require('@/assets/graphics/step-01.svg')"
                  alt="Create an æternity account with AirGap Vault.">
                  <template slot="info">
                    <h3 class="title title-category">
                      Create an æternity account with AirGap Vault
                    </h3>
                    <p>
                      AirGap Vault is the secure way to create an æternity account. Install the Vault app on a mobile device and create a new æternity account. Alternatively, you can use the webwallet Base æpp (beta) for migrating small amounts of AE tokens.
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
                    <h3 class="title title-category">
                      Migrate your Ethereum AE Tokens
                    </h3>
                    <p>
                      Use the migration aepp, that supports MetaMask or MyEtherWallet to migrate Ethereum AE tokens. You will need a small amount of ETH on the same account as your Ethereum AE tokens to cover the transaction fee.<br>
                      <strong class="ae-brand">Do NOT send AE tokens directly to the Migration Contract!</strong>
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
                    <h3 class="title title-category">
                      The Migration Contract receives your Ethereum AE Tokens
                    </h3>
                    <p>
                     The AE Migration Contract receives your Ethereum AE tokens and prepares your tokens for migration.
                    </p>
                  </template>
                </step-list-item>
                <step-list-item
                  :src="require('@/assets/graphics/step-04.svg')"
                  alt="Create an æternity account with AirGap Vault">
                  <template slot="info">
                    <h3 class="title title-category">
                      Your AE Tokens will be in the next hardfork release
                    </h3>
                    <p>
                      Your AE tokens will be on the æternity Mainnet after the scheduled hardfork gets adopted.
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
        <app-content container light wide>
          <section class="roadmap" id="phases">
            <intro>
              <h2 class="title title-sub">
                Migration Phases
              </h2>
              <p class="text text-intro">
                The Migration takes place in 3 phases. Each phase ends with a hardfork. The hardfork turns all migrated tokens in that phase into AE on the æternity Mainnet.
              </p>
            </intro>
            <phases>
              <phase-item
                number="0"
                :isCurrent="false"
                :isFinished="true"
                :src="require('@/assets/graphics/phase-1.jpg')"
                alt="Mainnet Launch"
                ends="Ended 25th November 2018"
                >
                <h3 class="title title-subcategory">
                  Mainnet Launch
                </h3>
                <p class="text text-small">
                  Tokens migrated before the Mainnet launch (25th of November 2018) are available as AE on Mainnet now.
                </p>
              </phase-item>
              <phase-item
                number="1"
                :isCurrent="true"
                :src="require('@/assets/graphics/phase-2.jpg')"
                alt="1st Hardfork"
                ends="Ends February 2019"
                >
                <h3 class="title title-subcategory">
                  1st Hardfork
                </h3>
                <p class="text text-small">
                  includes Tokens migrated between 25th of November 2018 and February 2019.
                </p>
              </phase-item>
              <phase-item
                number="2"
                :isCurrent="false"
                :src="require('@/assets/graphics/phase-3.jpg')"
                alt="2nd Hardfork"
                ends="Ends May 2019"
                >
                <h3 class="title title-subcategory">
                  2nd Hardfork
                </h3>
                <p class="text text-small">
                  includes Tokens migrated between March 2019 and May 2019.
                </p>
              </phase-item>
              <phase-item
                number="3"
                :isCurrent="false"
                :src="require('@/assets/graphics/phase-4.jpg')"
                alt="3rd Hardfork"
                ends="Ends September 2019"
                >
                <h3 class="title title-subcategory">
                  3rd Hardfork
                </h3>
                <p class="text text-small">
                  includes Tokens migrated between June 2019 and September 2019.
                </p>
              </phase-item>
            </phases>
          </section>
        </app-content>
        <app-content container grey wide>
          <app-faq>
            <template slot="info" class="faq__info">
              <h2 class="title title-category">F.A.Q.</h2>
              <p>
                The frequently asked questions can be found here. For more information, visit the <a href="https://forum.aeternity.com/t/token-migration-phase-1-support-and-faq/1411" target="_blank">Forum</a>.
              </p>
            </template>
            <template slot="questions">
              <app-accordion>
                <template slot="title">
                  <h3 class="title title-subcategory">
                    How are Phases 1, 2, 3 different from Phase 0?
                  </h3>
                </template>
                <template slot="body">
                  <p>
                    Apart from Phase 0, all consecutive phases (the current phase included) will require a hardfork in order for migrated AE tokens to become available on the Mainnet. All hardforks are subject to the willingness of miners and users to update their node software in order to follow the updated rules of the æternity network. The æternity Establishment and Foundation will support the forks, but it is up to the miner and user communities to determine if a fork will be successful or not.
                    In addition to recently migrated AE tokens, the scheduled hardforks will also include protocol improvements which introduce new functionalities, features and optimizations.
                    Here is the predicted AE token migration schedule:
                  </p>
                  <ul>
                    <li>End of Phase 0 (pre-Mainnet): November 25, 2018 [ENDED]</li>
                    <li> End of Phase 1: February 2019 [CURRENT PHASE]</li>
                    <li>End of Phase 2: May 2019</li>
                    <li>End of Phase 3: After September 2, 2019 (Ethereum AE tokens become non-transferable)</li>
                  </ul>
                  <p>
                    Users will still be able to migrate their AE tokens after the end of Phase 3 as long as they don’t use a smart contract to manage them. More information to come.
                  </p>
                </template>
              </app-accordion>
              <app-accordion>
                <template slot="title">
                  <h3 class="title title-subcategory">
                    What is æternity Mainnet?
                  </h3>
                </template>
                <template slot="body">
                  <p>
                    The æternity Mainnet is the open, public network where the AE tokens, smart contracts, oracles, state channels, naming system and all other technological features will be available for use. The Mainnet will be improved through scheduled hardforks, which will introduce newly migrated tokens and updated features and increased functionalities.
                  </p>
                </template>
              </app-accordion>
              <app-accordion>
                <template slot="title">
                  <h3 class="title title-subcategory">
                    When will my tokens be on the Mainnet?
                  </h3>
                </template>
                <template slot="body">
                  <p>
                    AE tokens will not be migrated immediately, but in phases. The Genesis Block, the first block of the æternity blockchain, will include all tokens migrated by users during Phase 0 (pre-Mainnet launch). Each of the subsequent three phases including the current one – Phase 1 – will end with a scheduled hardfork of the æternity blockchain. The scheduled hardfork will introduce the migrated tokens in the current Phase to the Mainnet. The current Phase is expected to end in February, 2019.
                  </p>
                </template>
              </app-accordion>
              <app-accordion>
                <template slot="title">
                  <h3 class="title title-subcategory">
                    What happens if I forget to migrate?
                  </h3>
                </template>
                <template slot="body">
                  <p>
                    Users will still be able to migrate their AE tokens to the Mainnet after the end of the last phase of token migration – Phase 3 – as long as they don’t use a smart contract to manage them. However, the migration process will change after September 2, 2019. More information will be provided in time. It is strongly advisable to migrate your tokens before the end of Phase 3.
                  </p>
                </template>
              </app-accordion>
            </template>
          </app-faq>
        </app-content>
        <app-content container small grey wide>
            <div class="to-top">
              <a href="#top" v-smooth-scroll="{ duration: 1000, offset: -50 }">
                <ae-button face="icon" fill="primary">
                  <ae-icon name="left-more" size="2rem"/>
                </ae-button>
              </a>
            </div>
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
