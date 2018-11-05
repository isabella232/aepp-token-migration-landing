import '@aeternity/aepp-components/dist/ae-button/ae-button.css'
import '@aeternity/aepp-components/dist/ae-icon/ae-icon.css'

import Vue from 'vue'
import app from './views/app.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')
