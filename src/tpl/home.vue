<template>
  <div class="home">
     <div class="header flex">
       <van-icon name="arrow-left" />
       <input type="text">
       <router-link to="/"><span class="citys" :class="color"> {{this.city}} <van-icon name="arrow-right" /></span></router-link>
     </div>
     <div class="content">
       <div class="lbt">
         <van-swipe :autoplay="3000">
           <van-swipe-item v-for="(imgs,index) in list" :key="img+index"><img :src=' imgs ' alt=""></van-swipe-item>
         </van-swipe>
       </div>
       <div class="tab">
         <van-row>
           <van-col span="8">1</van-col>
           <van-col span="8">2</van-col>
           <van-col span="8">3</van-col>
           <van-col span="8">4</van-col>
           <van-col span="8">5</van-col>
           <van-col span="8">6</van-col>
           <van-col span="8">7</van-col>
           <van-col span="8">8</van-col>
           <van-col span="8">9</van-col>
         </van-row>
       </div>
       <div class="tabs">
         <van-tabs @click="gets" ref="tabs">
           <van-tab v-for="(item, index) in titles"  :title="item" :key="index">
             <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight"  mode="out-in">
               <img :src=" index "  alt="">
             </transition>
           </van-tab>
         </van-tabs>
       </div>
       <ul class="flex">
         <li v-for="(item, index) in titles" :key="index" @click="cc(index)" :class='flag == index?"select":"none"'>{{item}}</li>
       </ul>
       <ul class="blo">
         <li v-for="(item, index) in titles" :key="index"  v-show="flag == index">{{item}}</li>
       </ul>
     </div>
    <van-collapse v-model="activeName">
      <van-collapse-item name="1">
        <div slot="title">有赞微商城 <van-icon name="question" /><span slot="value">商城</span></div>
        提供多样店铺模板，快速搭建网上商城
      </van-collapse-item>
      <van-collapse-item title="有赞零售" name="2" icon="shop" value="'3'">
        网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
      </van-collapse-item>
    </van-collapse>
    <div v-bind:id="ok">{{fullname}}</div>
    <input type="text" v-model="ok">
    <p>
      --<input type="text" v-model="oks">--
    </p>

    <ul class="pro">
      <li v-for="(item, index) in pro" :key="index">
        <div class="proimg">
          <img :src="item.src" alt="">
        </div>
        <p>还有{{item.d}}天{{item.h}}时{{item.m}}分{{item.s}}秒</p>
        <p>￥{{item.price}}</p>
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { ok } from './test'
import { title } from '../js/common'
import { mapState } from 'vuex'
import { Loading, Icon, Swipe, SwipeItem, Row, Col, Tab, Tabs, Collapse, CollapseItem } from 'vant'
import '@/assets/css/animate.css'
import '@/assets/css/reset.css'
import '@/assets/css/border.css'

Vue.use(Row, Col, Tab, Tabs, Swipe, SwipeItem, Loading, Icon, Collapse, CollapseItem)
export default{
  name: 'home',
  components: {
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Row.name]: Row,
    [Col.name]: Col,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  },
  computed: {
    ...mapState(['city', 'color']),
    fullname () {
      return this.ok + '' + 'haha'
    },
    oks: {
      get () {
        return this.ok + '' + 'haha'
      },
      set (v) {
        console.log(v)
      }
    }
  },
  data () {
    return {
      titles: ['全部', '购物', '推客', '测试', '战队', '提现'],
      img: '',
      flag: 0,
      list: ['http://10.0.0.17/1.jpg', 'http://10.0.0.17/test.jpg', 'http://10.0.0.17/pro1.png'],
      activeName: [],
      ok: '',
      num: 0,
      pro: [
        {name: '冰箱', price: 1200, src: 'http://10.0.0.17/1.jpg', started_at: '2019-01-01 00:00'},
        {name: '洗衣机', price: 100, src: 'http://10.0.0.17/test.jpg', started_at: '2019-01-05 00:00'},
        {name: '空调', price: 2200, src: 'http://10.0.0.17/pro1.png', started_at: '2019-01-08 00:00'}
      ]
    }
  },
  methods: {
    con () {
    },
    gets (index) {
      ok(this.titles[index])
      const jh = (a, b) => a + b
      console.log(jh(10, 5))
    },
    cc (index) {
      this.flag = index
    }
  },
  mounted () {
    this.con()
    setInterval(() => {
      const p = Math.round(new Date().getTime())
      // 商品倒计时
      for (let i = 0; i < this.pro.length; i++) {
        this.pro[i].started_at = this.pro[i].started_at.replace(/\-/g, '/') // 修复ios上显示NAN的BUG
        this.$set(this.pro[i], 'd', Math.floor((Date.parse(this.pro[i].started_at) - p) / 1000 / 60 / 60 / 24))
        this.$set(this.pro[i], 'h', Math.floor((Date.parse(this.pro[i].started_at) - p) / 1000 / 60 / 60 % 24))
        this.$set(this.pro[i], 'm', Math.floor((Date.parse(this.pro[i].started_at) - p) / 1000 / 60 % 60))
        this.$set(this.pro[i], 's', Math.floor((Date.parse(this.pro[i].started_at) - p) / 1000 % 60))
      }
    }, 1000)
  },
  created () {
    title('22222222222222')
  }
}
</script>

<style lang="less">
  @import "home";
   html,body{height: 100%}
  .home{position: relative;height: 100%;box-sizing: border-box}
  .header{justify-content: space-between;box-sizing: border-box;padding:0 10px;background-color: #25a4bb;color: #fff;position: absolute;width: 100%;top: 0}
  .header input{padding: 5px;  margin: 8px 30px;flex: 1}
  .content{position: relative;top: 42px}
   img{width: 100%}
  .van-swipe{max-height: 195px}
  .van-row{text-align: center}
  .van-col{box-sizing: border-box;background-color: #42b983;border:1px solid #fff;color: #fff;padding: 10px}
  .citys{color: #fff}
  .red{color: #ff0000}
  .blue{color: #2362ff}
  .flex{display: flex}
  .blo{box-sizing: border-box;border: 3px #2362ff solid;padding: 5px}
  .select{color: #2362ff}
  .pro{
    display: flex;
    flex-wrap: wrap;
    li{
      padding: 10px;
      box-sizing: border-box;
      width: 50%;
      .proimg{
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        text-align: center;
        img{
        }
      }
    }
  }
</style>
