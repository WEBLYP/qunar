import Vue from 'vue'
import Router from 'vue-router'
import home from '@/tpl/home'
import HelloWorld from '@/components/HelloWorld'
import lyp from '@/components/lyp'
import detail from '@/tpl/son/detail'
import scroll from '@/tpl/Scroll'
import upscroll from '@/tpl/upscroll'
import axios from '@/tpl/axios'
import update from '@/tpl/update'
import buycart from '@/tpl/buycart'
import city from '@/tpl/city'
import { Swipe, SwipeItem, NoticeBar, Toast } from 'vant'
import 'vant/lib/vant-css/index.css'

Vue.use(NoticeBar)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Router)
Vue.use(Toast)

export default new Router({
  routes: [
    {
      path: '/hh',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lyp',
      name: 'lyp',
      component: lyp
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: '城市'
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: scroll
    },
    {
      path: '/upscroll',
      name: 'upscroll',
      component: upscroll
    },
    {
      path: '/axios',
      name: 'axios',
      component: axios
    },
    {
      path: '/buycart',
      name: 'buycart',
      component: buycart
    },
    {
      path: '/',
      name: 'city',
      component: city
    },
    {
      path: '/update',
      name: 'update',
      component: update
    }
  ]
})
