import Vue from 'vue'
import Router from 'vue-router'
import Test from './views/Test.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Test
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: () => import(/* webpackChunkName: "demo1" */ './views/demo1.vue')
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: () => import(/* webpackChunkName: "demo2" */ './views/demo2.vue')
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: () => import(/* webpackChunkName: "demo3" */ './views/demo3.vue')
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: () => import(/* webpackChunkName: "demo4" */ './views/demo4.vue')
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: () => import(/* webpackChunkName: "demo5" */ './views/demo5.vue')
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: () => import(/* webpackChunkName: "demo6" */ './views/demo6.vue')
    },
    {
      path: '/demo7',
      name: 'demo7',
      component: () => import(/* webpackChunkName: "demo7" */ './views/demo7.vue')
    },
    {
      path: '/demo8',
      name: 'demo8',
      component: () => import(/* webpackChunkName: "demo8" */ './views/demo8.vue')
    },
    {
      path: '/demo9',
      name: 'demo9',
      component: () => import(/* webpackChunkName: "demo9" */ './views/demo9.vue')
    },
    {
      path: '/demo10',
      name: 'demo10',
      component: () => import(/* webpackChunkName: "demo10" */ './views/demo10.vue')
    },
    {
      path: '/demo11',
      name: 'demo11',
      component: () => import(/* webpackChunkName: "demo11" */ './views/demo11.vue')
    },
    {
      path: '/demo12',
      name: 'demo12',
      component: () => import(/* webpackChunkName: "demo12" */ './views/demo12.vue')
    },
    {
      path: '/demo13',
      name: 'demo13',
      component: () => import(/* webpackChunkName: "demo13" */ './views/demo13.vue')
    },
    {
      path: '/demo15',
      name: 'demo15',
      component: () => import(/* webpackChunkName: "demo15" */ './views/demo15.vue')
    },
    {
      path: '/demo16',
      name: 'demo16',
      component: () => import(/* webpackChunkName: "demo16" */ './views/demo16.vue')
    },
    {
      path: '/demo17',
      name: 'demo17',
      component: () => import(/* webpackChunkName: "demo17" */ './views/demo17.vue')
    },
    {
      path: '/demo18',
      name: 'demo18',
      component: () => import(/* webpackChunkName: "demo18" */ './views/demo18.vue')
    },
    {
      path: '/demo19',
      name: 'demo19',
      component: () => import(/* webpackChunkName: "demo19" */ './views/demo19.vue')
    },
    {
      path: '/demo20',
      name: 'demo20',
      component: () => import(/* webpackChunkName: "demo20" */ './views/demo20.vue')
    },
    {
      path: '/demo21',
      name: 'demo21',
      component: () => import(/* webpackChunkName: "demo21" */ './views/demo21.vue')
    },
    {
      path: '/demo22',
      name: 'demo22',
      component: () => import(/* webpackChunkName: "demo22" */ './views/demo22.vue')
    }
  ]
})
