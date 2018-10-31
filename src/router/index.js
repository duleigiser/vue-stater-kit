import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/view/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: '首页',
      component: () => import('@/views/index')
    }, {
      path: '/detail',
      name: 'detail',
      meta: {title: 'detail'},
      component: () => import('@/views/detail')
    }
  ]
})
