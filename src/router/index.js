import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [{
    name: 'index',
    path: '/',
    component: require('@/views/index/index.vue').default
  },
  {
    name: 'Legal',
    path: '/legal',
    component: require('@/views/legal/legal.vue').default
  },
  {
    name: 'Imprint',
    path: '/imprint',
    component: require('@/views/imprint/imprint.vue').default
  },
  {
    name: 'Terms & Services',
    path: '/tos',
    component: require('@/views/terms/terms.vue').default
  }
  ]
})
