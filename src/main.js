// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import infiniteScroll from 'vue-infinite-scroll'
import {AjaxPlugin, Loading, XButton, ToastPlugin} from 'vux'
import { AjaxPlugin } from 'vux'
import './util/rem.js'

Vue.config.productionTip = false
Vue.use(infiniteScroll)
Vue.use(AjaxPlugin)// 请求
Vue.component('loading', Loading)
Vue.component('x-button', XButton)
Vue.use(ToastPlugin)
require('es6-promise').polyfill()

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
