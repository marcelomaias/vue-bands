import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vue-bands-prod/',
      name: 'home',
      component: Home
    },
    {
      path: '/vue-bands-prod/led-zeppelin',
      name: 'page-led',
      component: () => import('./views/Led.vue')
    },
    {
      path: '/vue-bands-prod/pink-floyd',
      name: 'page-pink',
      component: () => import('./views/Pink.vue')
    },
    {
      path: '/vue-bands-prod/rush',
      name: 'page-rush',
      component: () => import('./views/Rush.vue')
    }
  ]
})
