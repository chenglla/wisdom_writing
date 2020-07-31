import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const home = () => import('@/home/index')
const nav = () => import('@/layout/navbar')
const searchInfo = () => import('@/search/searchInfo')
const my = () => import('@/my/index')
const collectList = () => import('@/my/collectList')
const myEvaluation = () => import('@/my/myEvaluation')
const testResult = () => import('@/my/testResult')

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
    {
      path: '/my',
      components: {
        default: my, nav: nav
      },
      name: 'my',
      meta: { tab: 'my', title: 'my' }
    },
    {
      path: '/collectList',
      components: {
        default: collectList, nav: nav
      },
      name: 'collectList',
      meta: { tab: 'collectList', title: 'collectList' }
    },
    {
      path: '/myEvaluation',
      components: {
        default: myEvaluation, nav: nav
      },
      name: 'myEvaluation',
      meta: { tab: 'myEvaluation', title: 'myEvaluation' }
    },
    {
      path: '/testResult',
      components: {
        default: testResult, nav: nav
      },
      name: 'testResult',
      meta: { tab: 'testResult', title: 'testResult' }
    }
  ]
})
