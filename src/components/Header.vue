<template>
  <div class="header">
    <transition-group tag="ul">
       <li :class="type" @click="del(index)" v-for="(item,index) in list" :key="index" :index="index">{{item}}</li>
    </transition-group>
    <van-circle
      v-model="currentRate"
      :rate="rates"
      :speed="100"
      :text="text"
    />
  </div>
</template>

<script>
import { Circle, Icon, Loading } from 'vant'
import Vue from 'vue'
import 'vant/lib/vant-css/index.css'
Vue.use(Circle, Icon, Loading)

export default{
  name: 'Header',
  data () {
    return {
      currentRate: 0,
      type: ' ',
      rates: 0,
      list: [ 'a', 'b', 'c', 'd' ]
    }
  },
  props: ['index'],
  methods: {
    del (index) {
      this.type = ' '
      this.rates = 0
      this.rates = this.rates >= 100 ? 0 : this.rates
      setInterval(() => { this.rates += 1 }, 100)
    }
  },
  computed: {
    text () {
      return parseInt(this.currentRate.toFixed(0)) + '%'
    },
    rate () {
      return this.rates
    }
  }
}
</script>

<style>
  .active{background-color: #000;color: #ff0000}
  .blue{color: blue}
  .header{position: absolute;top: 0;width: 100%;background-color: yellow;}
  ul{display: flex;align-items: center;justify-content: space-around}
  li{padding: 10px 0;width: 25%;text-align: center}
</style>
