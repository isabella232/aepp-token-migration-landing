<template>
  <header class="app-hero">
    <app-content container flex wide>
      <section class="app-hero__info">
        <div class="app-hero__info__text">
          <slot name="text"/>
        </div>
        <div class="app-hero__info__buttons">
          <slot name="buttons"/>
        </div>
      </section>
    </app-content>
    <figure class="app-hero__img"
      data-aos="slide-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-anchor=".app-hero__count"
    >
      <img :src="require('../assets/graphics/galaxy-phase-1.png')" alt="mainnet launch">
    </figure>
    <div class="app-hero__count">
      <div class="app-hero__count-wrapper">
        <p class="token-count">{{burnedBalance | reduceDecimals}}</p>
        <p class="token-count-info">AE migrated so far</p>
      </div>
      <div class="app-hero__line"></div>
    </div>
  </header>
</template>
<script>
import Web3 from 'web3'
import AppContent from '@/sections/app-content.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
  mounted () {
    document.addEventListener('scroll', () => {
      AOS.init({
        mirror: true
      })
    })
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
    top: -86%;
    width: 40%;
    max-width: 30rem;
    position: absolute;
    @include only-tablet {
      top: -60%;
      width: 50%;
      right: -20%;

    }
    @include only-phone {
      top: -50%;
      width: 80%;
      right: -50%;
    }
  }

  &__info {
    margin: auto 0;
    width: 100%;
    max-width: 70%;
    @include only-phone {
      margin-top: $spacer-xxl;
      max-width: 100%;
    }
    @include only-tablet {
    }
    &__text {
      @include only-phone {
        max-width: 70%;
      }
    }
    &__buttons{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin-top: $spacer-xl;
        @include only-phone {
          justify-content: center;
          align-items: center;
        }
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
      padding: 8rem 0;
      @include only-phone{
        padding: 4rem 0 3.5rem;
      }
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
  font-weight: bold;
  line-height: 1em;
  &-info {
    margin: 0;
  }
  color: $magenta;
    @include font-size(wow);
  @include only-phone {
    @include font-size(xxl);
  }
}

</style>
