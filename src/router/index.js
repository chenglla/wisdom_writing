import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const home = () => import('@/home/index')
const nav = () => import('@/layout/navbar')
const searchInfo = () => import('@/search/searchInfo')

export default new Router({
  routes: [
    {
      // path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      components: {
        default: home, nav: nav
      },
      name: 'home',
      meta: { tab: 'home', title: 'home' }
    },
    {
      path: '/searchInfo',
      components: {
        default: searchInfo
      },
      name: 'searchInfo',
      meta: { tab: 'searchInfo', title: 'searchInfo' }
    },
  ]
})
