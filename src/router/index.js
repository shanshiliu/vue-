import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import find from '@/components/find'
import order from '@/components/order'
import mine from '@/components/mine'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/find',
      name: 'find',
      component: find,
    },
    {
      path: '/order',
      name: 'order',
      component: order,
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
    },
  ]
})
