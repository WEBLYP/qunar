<template>
  <div class="cityhead">
    <router-link to="/home"><van-icon name="arrow-left" /></router-link>
    城市选择
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { Icon } from 'vant'
Vue.use(Icon)
export default {
  name: 'cityhead',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/all.styl"
  .cityhead
   background-color: $themeColor
   text-align: center
   height:0.86rem
   line-height :0.86rem
   overflow: hidden
   color: #fff
   box-sizing border-box
  .van-icon
    float: left
    color #fff
    line-height: 0.86rem;
    left: 0.2rem;
</style>
