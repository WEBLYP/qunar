<template>
  <div class="search">
    <div class="main">
      <van-icon name="search" />
      <input type="search"  v-model="val" placeholder="输入城市名或pinyin">
    </div>
    <div class="result" ref="scroll"  v-show='val'>
      <ul>
        <li class="citylist" v-for="(item, index) in list" :key="index" @click="changecity(item.name)"><router-link to="/home">{{item.name}}</router-link></li>
        <li v-show="nodata">暂无搜索结果</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Bscroll from 'better-scroll'
import { Icon } from 'vant'
Vue.use(Icon)
export default {
  name: 'search',
  props: {
    citys: Object
  },
  data () {
    return {
      val: '',
      list: [],
      timer: null,
      show: false
    }
  },
  watch: {
    val () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const res = []
        for (let i in this.citys) {
          this.citys[i].forEach((vals) => {
            if (vals.spell.indexOf(this.val) > -1 || vals.name.indexOf(this.val) > -1) {
              res.push(vals)
            }
          })
        }
        this.list = res
      }, 100)
    }
  },
  computed: {
    nodata () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.scroll)
  },
  methods: {
    changecity (city) {
      this.$store.dispatch('changecity', city)
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/all.styl"
  .search
    background-color :#3BAEFF
    box-sizing border-box
    padding 5px 10px
  .main
    display: flex;
    align-items: center;
    height: 30px;
    /* padding-left: 16px; */
    box-sizing: border-box;
    width: 100%;
    input
     flex: 1;
     padding-left: 0.6rem;
     overflow hidden
     border-radius :25px
     background-color: #fff
     display: flex;
     align-items: center;
     font-size: 15px;
     height: 30px;
  .van-icon
    float: left
    color #000
    line-height: 0.86rem;
    left: 0.5rem;
  .result
    position absolute
    top 83px
    left 0
    right 0
    bottom 0
    background-color #fff
    z-index:1
    overflow: hidden
  .citylist
    line-height 30px
    padding 5px
    box-sizing border-box
    border-bottom 1px solid #f5f5f5
</style>
