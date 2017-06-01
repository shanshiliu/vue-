import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import newcomponents from '@/components/newcomponents'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/hi',
      name: 'newcomponents',
      component: newcomponents,
    },
  ]
})
