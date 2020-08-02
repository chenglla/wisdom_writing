import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const home = () => import('@/home/index')
const nav = () => import('@/layout/navbar')
const searchInfo = () => import('@/search/searchInfo')
const my = () => import('@/my/index') // 我的
const collectList = () => import('@/my/collectList') // 文章收藏
const myEvaluation = () => import('@/my/myEvaluation') // 我的测评
const testResult = () => import('@/my/testResult') // 测试结果
const specialExpress = () => import('@/smartAssessment/index') // 智能测评
const startTest = () => import('@/smartAssessment/startTest')// 开始测评
const moreComposition = () => import('@/home/more/index')// 更多文章列表
const compositionDetail = () => import('@/home/more/compositionDetail')// 作文详情
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
        default: collectList
      },
      name: 'collectList',
      meta: { tab: 'collectList', title: 'collectList' }
    },
    {
      path: '/myEvaluation',
      components: {
        default: myEvaluation
      },
      name: 'myEvaluation',
      meta: { tab: 'myEvaluation', title: 'myEvaluation' }
    },
    {
      path: '/testResult',
      components: {
        default: testResult
      },
      name: 'testResult',
      meta: { tab: 'testResult', title: 'testResult' }
    },
    {// 智能测评
      path: '/specialExpress',
      components: {
        default: specialExpress, nav: nav
      },
      name: 'specialExpress',
      meta: { tab: 'specialExpress', title: 'specialExpress' }
    },
    {// 开始测试
      path: '/startTest',
      components: {
        default: startTest
      },
      name: 'startTest',
      meta: { tab: 'startTest', title: 'startTest' }
    },
    {// 更多文章列表
      path: '/moreComposition',
      components: {
        default: moreComposition
      },
      name: 'moreComposition',
      meta: { tab: 'moreComposition', title: 'moreComposition' }
    },
    {// 更多文章列表
      path: '/compositionDetail',
      components: {
        default: compositionDetail
      },
      name: 'compositionDetail',
      meta: { tab: 'compositionDetail', title: 'compositionDetail' }
    },
  ]
})
