import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/led-zeppelin',
      name: 'led',
      component: () => import('./views/Led.vue')
    },
    {
      path: '/pink-floyd',
      name: 'pink',
      component: () => import('./views/Pink.vue')
    },
    {
      path: '/rush',
      name: 'rush',
      component: () => import('./views/Rush.vue')
    }
  ]
})
