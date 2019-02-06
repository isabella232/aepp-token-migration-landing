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
              Migrate your <span class="ae-brand">ERC-20 AE Tokens</span> to æternity now
            </h1>
            <p class="text text-intro text-intro_light">
              It’s happening. The æternity blockchain is live. Time to migrate your ERC-20 AE tokens from the Ethereum net to the æternity blockchain. We’ll help you get it done in 6 steps.
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
                      Create an æternity account
                    </h3>
                    <p>
                      Ledger or AirGap Vault are the most secure ways to create an æternity account. You can also use Base æpp for migrating small amounts of AE tokens.
                    </p>
                  <!--</template>
                  <template slot="buttons">
                    <a class="steps-footer__cta" href="https://airgap.it/airgap-vault/" target="_blank">
                      <img :src="require('@/assets/graphics/airgap-logo.svg')" alt="airgap vault logo">
                    </a>
                     <a class="steps-footer__cta" href="https://base.aepps.com/" target="_blank">
                      <img :src="require('@/assets/graphics/base-aepp-logo.svg')" alt="base aepp logo">
                    </a>-->
                  </template>
                </step-list-item>
                <step-list-item
                  :src="require('@/assets/graphics/step-02.svg')"
                  alt="Create an æternity account with AirGap Vault">
                  <template slot="info">
                    <h3 class="title title-category">
                      Start migrating your ERC-20 AE Tokens
                    </h3>
                    <p>
                      All small steps are explained in detail<br> Please follow the instructions carefully.<br>
                      <strong class="ae-brand">Do NOT send AE tokens directly to the Migration Contract.</strong>
                    </p>
                  </template>
                  <!--<template slot="buttons">
                    <a class="steps-footer__cta" href="https://metamask.io/" target="_blank">
                      <img :src="require('@/assets/graphics/metamask-fox.svg')" alt="MetaMask">
                    </a>
                    <a class="steps-footer__cta" href="https://myetherwallet.com/" target="_blank">
                      <img :src="require('@/assets/graphics/myetherwallet.svg')" alt="MyEtherWallet">
                    </a>
                  </template>-->
                </step-list-item>
                <step-list-item
                  :src="require('@/assets/graphics/step-03.svg')"
                  alt="Create an æternity account with AirGap Vault">
                  <template slot="info">
                    <h3 class="title title-category">
                      Smart contracts take over from there
                    </h3>
                    <p>
                     Your Ethereum AE tokens will automatically be migrated and turn into AE on the æternity blockchain.
                    </p>
                  </template>
                </step-list-item>
                <step-list-item
                  :src="require('@/assets/graphics/step-04.svg')"
                  alt="Create an æternity account with AirGap Vault">
                  <template slot="info">
                    <h3 class="title title-category">
                      Your AE will be available soon
                    </h3>
                    <p>
                      After successful migration, you can see your AE in Base æpp right after the next scheduled hardfork has taken place.
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
                The Migration is divided in 3 phases. Each phase ends with a hardfork. The hardfork turns all ERC-20 tokens migrated in that phase into AE on the æternity blockchain.
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
                  Pre-Roma Release
                </h3>
                <p class="text text-small">
                  includes ERC-20 Tokens migrated before Roma Release (25th of November 2018).
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
                  Roma Release
                </h3>
                <p class="text text-small">
                  Hardfork includes ERC-20 Tokens migrated between 25th of November 2018 and February 2019.
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
                  Minerva Release
                </h3>
                <p class="text text-small">
                  Hardfork includes Tokens migrated between March 2019 and May 2019.
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
                  3rd Release
                </h3>
                <p class="text text-small">
                  Hardfork includes Tokens migrated between June 2019 and September 2019
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
                Some more background information on the Token Migration. For technical support, visit the <a href="https://forum.aeternity.com/t/token-migration-phase-1-support-and-faq/1411" target="_blank">Forum</a>.
              </p>
            </template>
            <template slot="questions">
              <app-accordion>
                <template slot="title">
                  <h3 class="title title-subcategory">
                    What are Roma and Minerva?
                  </h3>
                </template>
                <template slot="body">
                  <p>
                    The Roma net is æternity’s first public blockchain. With Roma, AE tokens, smart contracts, oracles, state channels, a naming system and other features became available. æternity’s blockchain will be improved in three Phases, each one ending with a scheduled hardfork. Each Phase has its own name (Roma, Minerva) and introduces updated features, optimizations and a batch of migrated tokens.
                  </p>
                </template>
              </app-accordion>
              <app-accordion>
                <template slot="title">
                  <h3 class="title title-subcategory">
                    How do the Phases work?
                  </h3>
                </template>
                <template slot="body">
                  <p>
                    Each phase ends with a hardfork, necessary to introduce new features, optimizations and migrated AE tokens. The æternity Establishment and Foundation support the hardforks. But since æternity is decentralized by nature, hardforks depend on the willingness of miners and users to update their software and accept the updated network.
                  </p>
                  <p>
                    After September 2, 2019 Ethereum ERC-20 AE tokens become non-transferable. Users will still be able to migrate their AE tokens after the end of Phase 3 as long as they don’t use a smart contract to manage them. More information will follow.
                  </p>
                </template>
              </app-accordion>
              <app-accordion>
                <template slot="title">
                  <h3 class="title title-subcategory">
                    When will my tokens be available?
                  </h3>
                </template>
                <template slot="body">
                  <p>
                    AE tokens will not be available immediately after you have completed migration. The three phases each end with a scheduled hardfork which makes all migrated ERC-20 tokens in that Phase available on the æternity’s blockchain at once. 
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
                    You can still migrate your ERC-20 AE tokens to the Roma net after the end of Phase 3 – as long as they are not used to manage a smart contract. However, the migration process will change after September 2, 2019. More specific information will follow closer to that date. It is highly recommended to migrate your tokens before the end of Phase 3.
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
