<template>
  <div id="app">
    <main class="home">
      <header class="home-header" id="top">
        <div class="home-header__inner-wrapper">
          <figure class="home-header__logo">
            <router-link href="/index">
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
      <article id="content">
        <header class="hero">
          <div class="hero__inner-wrapper">
            <h1 class="title hero__title">
              Migrate your AE tokens to the æternity mainnet
            </h1>
            <p>
              The Mainnet is almost ready! All the AE tokens you own on Ethereum can now be migrated to the mainnet. With
              this tool we guide you securely through the process.
            </p>
            <div class="button-wrapper">
              <a href="/begin.html/">
                <ae-button face="round" fill="primary" extend>
                  Start Migration
                </ae-button>
              </a>
            </div>
          </div>
          <div class="hero__line"></div>
        </header>
        <section>
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
            <step-list-item name="Step">
              <template slot="info">
                <h4 class="title title-subcategory">
                  Create an æternity account with AirGap or with Ledger Nano S
                </h4>
                <p>
                  This requires an installation of Airgap on a mobile device or a connection with the Ledger Nano S.
                </p>
                <footer class="steps-footer">
                  <a class="steps-footer__cta" href="#">
                    <img :src="require('@/assets/graphics/airgap-logo.svg')" alt="airgap wallet logo">
                  </a>
                  <a class="steps-footer__cta" href="#">
                    <img :src="require('@/assets/graphics/ledger-logo.svg')" alt="ledger logo">
                  </a>
                </footer>
              </template>
            </step-list-item>
            <step-list-item name="Step">
              <template slot="info">
                <h4 class="title title-subcategory">
                  Transfer the desired amount tokens to the AE Migration Address
                </h4>
                <p>
                  We advice you to transfer your AE tokens to the AE Token Contract with MetaMask or MyEtherWallet.
                </p>
                <footer class="steps-footer">
                  <a class="steps-footer__cta" href="#">
                    <img :src="require('@/assets/graphics/metamask-fox.svg')" alt="airgap wallet logo"> install Meta Mask
                  </a>
                  <a class="steps-footer__cta" href="#">
                    <img :src="require('@/assets/graphics/myetherwallet.svg')" alt="ledger logo"> Register at My Ether
                    Wallet
                  </a>
                </footer>
              </template>
            </step-list-item>
            <step-list-item name="Step">
              <template slot="info">
                <h4 class="title title-subcategory">
                  The AE Migration Address burns the AE tokens
                </h4>
                <p>
                  The AE Migration Contract burns all your tokens, and ensures that they will be available on the correct address on the Mainnet.
                </p>
                <footer class="steps-footer">
                  <a class="steps-footer__cta" href="#">
                    <img :src="require('@/assets/graphics/airgap-logo.svg')" alt="airgap wallet logo">
                  </a>
                  <a class="steps-footer__cta" href="#">
                    <img :src="require('@/assets/graphics/ledger-logo.svg')" alt="ledger logo">
                  </a>
                </footer>
              </template>
            </step-list-item>
            <step-list-item name="Step">
              <template slot="info">
                <h4 class="title title-subcategory">
                  Your tokens are now available on the æternity Mainnet
                </h4>
                <p>
                  We will take care of this step. Your tokens will be available in the Mainnet following the Migration Roadmap below.
                </p>
                <footer class="steps-footer">
                  <a class="steps-footer__cta" href="#">
                    <img :src="require('@/assets/graphics/airgap-logo.svg')" alt="airgap wallet logo">
                  </a>
                  <a class="steps-footer__cta" href="#">
                    <img :src="require('@/assets/graphics/ledger-logo.svg')" alt="ledger logo">
                  </a>
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
              <div class="button-wrapper">
                <a href="/begin.html/">
                  <ae-button face="round" fill="primary" extend>
                    Start Migration
                  </ae-button>
                </a>
              </div>
            </intro>
          </footer>
        </section>
        <section class="roadmap" id="road-map">
          <intro>
            <h2 class="title title-category">
              Migration Roadmap
            </h2>
            <p>
              The tokens are not migrated immediately, but in batches. The AE Migration Address ‘collects’ the received
              tokens and spawns them in the Mainnet, in phases.
            </p>
          </intro>
          <steps-list :secondary="true">
            <step-list-item name="Phase">
              <template slot="number">
                Ends November ‘18
              </template>
              <template slot="info">
                <h3 class="title title-small">
                  Mainnet Launch
                </h3>
                <p>
                  Will include all the migrated tokens until Mainnet launch
                </p>
              </template>
            </step-list-item>
            <step-list-item name="Current Phase" :isActive="true">
              <template slot="number">
                Ends February ‘19
              </template>
              <template slot="info">
                <h3 class="title title-small">
                  Hardfork 1
                </h3>
                <p>
                  Will include all the migrated tokens between Mainnet launch and the 1st Hardfork
                </p>
              </template>
            </step-list-item>
            <step-list-item name="Phase">
              <template slot="number">
                Ends May ‘19
              </template>
              <template slot="info">
                <h3 class="title title-small">
                  Hardfork 2
                </h3>
                <p>
                  Will include all the migrated tokens between the 1st and 2nd Hardfork
                </p>
              </template>
            </step-list-item>
            <step-list-item name="Phase">
              <template slot="number">
                Ends September ‘19
              </template>
              <template slot="info">
                <h3 class="title title-small">
                  Hardfork 3
                </h3>
                <p>
                  Will include all the migrated tokens between the 2nd and 3rd Hardfork
                </p>
              </template>
            </step-list-item>
          </steps-list>
        </section>
        <section class="faq" id="faq">
          <article class="faq__inner-wrapper">
            <div class="faq__info">
              <h2 class="titletitle-category">F.A.Q.</h2>
              <p>
                The frequenlty asked questions can be found here. For more information, visit our forum.
              </p>
            </div>
            <div class="faq__q-a">
              <app-accordion>
                <template slot="title">
                  <h3 class="titletitle-tiny">
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
                  <h3 class="titletitle-tiny">
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
                  <h3 class="titletitle-tiny">
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
                  <h3 class="titletitle-tiny">
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
                  <h3 class="titletitle-tiny">
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
        </section>
        <div class="to-top">
            <a href="#top">
              <ae-button face="icon" fill="primary">
                <ae-icon name="left-more" size="2rem"/>
              </ae-button>
            </a>
          </div>
        <app-footer/>
      </article>
    </main>
  </div>
</template>
<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AppAccordion from '@/components/app-accordion.vue'
import AppFooter from '@/components/app-footer.vue'
import StepsList from '@/components/steps-list.vue'
import StepListItem from '@/components/step-list-item.vue'
import Intro from '@/components/intro.vue'

import Web3 from 'web3'
let $web3
const abi = [{
  "constant": true,
    "inputs": [],
    "name": "burnCount",
    "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}]

if (window.ethereum) {
  $web3 = new Web3(window.ethereum)
} else if (window.web3) {
  $web3 = new Web3(window.web3.currentProvider)
} else {
  $web3 = new Web3()
}
console.log($web3)

async function getBurnCount () {
  let burnContract = new $web3.eth.Contract(abi, '0x4ecd812b010d9db16b0fb7143a79786b65b89b09')
  return burnContract.methods.burnCount().call()
}

export default {
  name: 'index',
  components: {
    StepsList,
    StepListItem,
    AppAccordion,
    Intro,
    AeButton,
    AeIcon,
    AppFooter
  },
  data: function () {
    return {
      open: false,
      windowWidth: window.innerWidth
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  computed: {
    isDesktop () {
      return this.windowWidth >= 1000
    },
    burnCount() {
      return getBurnCount()
    }
  },
  methods: {
    toggleMenu () {
      this.open = !this.open
    }
  }
}
</script>
<style src="./index.scss" lang="scss"></style>
