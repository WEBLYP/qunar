<template>
  <div class="hello">
    <p>详情页</p>
    <van-swipe :autoplay="3000">
      <van-swipe-item><img src="http://10.0.0.108/test.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="http://10.0.0.108/test.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="http://10.0.0.108/test.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="http://10.0.0.108/test.jpg" alt=""></van-swipe-item>
    </van-swipe>

    <van-notice-bar
      text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
      left-icon="https://img.yzcdn.cn/1.png"
    />
    <van-rate v-model="value" />
    <app-menu></app-menu>
    <Header></Header>
  </div>
</template>

<script>

import { Rate } from 'vant'
import AppMenu from '../../components/Menu'
import Header from '../../components/Header'

export default {
  name: 'detail',
  components: {
    [Rate.name]: Rate,
    AppMenu,
    Header
  },
  data () {
    return {
      value: 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  hello
    color:red
  img
    width: 100%
  Header
    color :red
</style>
