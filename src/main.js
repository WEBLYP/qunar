// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import fastclick from 'fastclick'
import './assets/css/reset.css'
import './assets/css/border.css'
import 'vant/lib/vant-css/button.css'
import './assets/css/animate.css'
import './assets/css/iconfont.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
