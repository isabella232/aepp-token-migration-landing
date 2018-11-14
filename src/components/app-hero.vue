<template>
  <header class="app-hero">
    <app-content container flex>
      <section class="app-hero__info">
        <slot name="text"/>
        <div class="app-hero__info__buttons">
          <slot name="buttons"/>
        </div>
      </section>
    </app-content>
    <figure class="app-hero__img">
      <img :src="require('../assets/graphics/galaxy.png')" alt="mainnet launch  ">
    </figure>
    <div class="app-hero__count">
      <div class="app-hero__count-wrapper">
        <p class="token-count">{{burnedBalance | reduceDecimals}}</p>
        <p>AE migrated so far</p>
      </div>
      <div class="app-hero__line"></div>
    </div>
  </header>
</template>
<script>
import Web3 from 'web3'
import AppContent from '@/sections/app-content.vue'
let $web3
const abi = [{
  'constant': true,
  'inputs': [
    {
      'name': '_owner',
      'type': 'address'
    }
  ],
  'name': 'balanceOf',
  'outputs': [
    {
      'name': 'balance',
      'type': 'uint256'
    }
  ],
  'payable': false,
  'type': 'function'
}]

$web3 = new Web3(new Web3.providers.HttpProvider(process.env.VUE_APP_WEB3_PROVIDER_URL))
let aeTokenContract = new $web3.eth.Contract(abi, process.env.VUE_APP_AE_TOKEN_CONTRACT)

async function getBurnedBalance () {
  let balance = await aeTokenContract
    .methods
    .balanceOf(process.env.VUE_APP_AE_TOKEN_BURNER)
    .call()
  return Web3.utils.fromWei(balance)
}
export default {
  name: 'app-hero',
  props: {
    title: String
  },
  data () {
    return {
      burnedBalance: null
    }
  },
  async created () {
    this.burnedBalance = await getBurnedBalance()
  },
  filters: {
    reduceDecimals: function (value) {
      if (!value) return ''
      value = parseFloat(value)
      return value.toFixed(2)
    }
  },
  components: {
    AppContent
  }
}
</script>
<style lang="scss" scoped>
.app-hero {
  position: relative;
  height: 100%;
  min-height: 90vh;
  background-color: $skyblue;
  display: flex;
  text-align: left;
  margin-bottom: 75vh;

    @include only-phone {
      margin-bottom: 90vh;
      min-height: 100vh;
    }

  &__img {
    z-index: 0;
    right: -10%;
    top: 50%;
    width: 40%;
    max-width: 30rem;
    transform: translateY(-50%);

      @include only-phone {
        right: -40%;
        width: 80%;
      }
      @include only-tablet {
        right: -20%;
        width: 55%;
      }
  }

  &__info {
    margin: auto 0;
    width: 100%;
    max-width: 60%;
    @include only-phone {
      margin-top: $spacer-xxl;
      max-width: 70%;
    }
    @include only-tablet {
      max-width: 60%;
    }
    &__buttons{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin-top: $spacer-l;
        @include tablet-and-desktop {
          flex-direction: row;
        }
    }
  }

  &__count {
    min-height: 75vh;
    position: absolute;
    background-color: $white;
    z-index: 1;
    bottom: -75vh;

       @include only-phone {
        min-height: 90vh;
        bottom: -90vh;
      }
    left: 0;
    width: 100%;
    display: flex;

    &-wrapper {
      margin: auto;
      background-color: $white;
      padding-top: 3em;
      padding-bottom: 0;
      text-align: center;
    }
  }

  &__line {
    width: 2px;
    background-color: $magenta;
    position: absolute;
    top: -3rem;
    bottom: -3rem;
    z-index: -1;
    left: 50%;
    transform: translate(-50%);
  }
}

.token-count{
  @include font-size(xxxxl);
  font-weight: bold;
  color: $magenta;

}

.out-of-view .app-hero__img{
  position: fixed;
}
.in-view .app-hero__img{
  position: absolute;

}
</style>
