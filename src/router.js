import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/led-zeppelin',
      name: 'page-led',
      component: () => import('./views/Led.vue')
    },
    {
      path: '/pink-floyd',
      name: 'page-pink',
      component: () => import('./views/Pink.vue')
    },
    {
      path: '/rush',
      name: 'page-rush',
      component: () => import('./views/Rush.vue')
    }
  ]
})
