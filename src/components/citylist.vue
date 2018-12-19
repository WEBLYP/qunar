<template>
  <div class="citylist" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-bt">当前城市</div>
        <div class="nowcitys">
          <div class="nowcity flex"><van-loading type="spinner" color="black" v-if="local" /><span class="city-now" :class="color">{{this.city}}</span></div>
        </div>
      </div>
      <div class="area">
        <div class="title border-bt">热门城市</div>
        <div class="nowcitys" >
          <div class="nowcity" v-for="(item, index) in hotcity" :key="index"  @click="changecity(item.name)"><router-link to="/home">{{item.name}}</router-link></div>
        </div>
      </div>
      <div class="area" v-for="(item , key) in citys" :key="key"  :ref="key">
        <div class="title border-bt">{{key}}</div>
        <ul class="allcitys">
          <li class="allcity" v-for="(item, index) in item" :key="index" @click="changecity(item.name)"><router-link to="/home">{{item.name}}</router-link></li>
        </ul>
      </div>
   </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon, Loading } from 'vant'
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
Vue.use(Icon, Loading)

export default {
  name: 'citylist',
  props: {
    citys: Array,
    hotcity: Array,
    letter: String
  },
  data () {
    return {
      local: true
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    changecity (city) {
      localStorage.city = city
      localStorage.color = localStorage.color === 'red' ? 'blue' : 'red'
      this.$store.dispatch('changecity', city)
      this.$store.dispatch('cc', 'blue')
      console.log(this.$store)
      this.$router.push('/home')
    }
  },
  computed: {
    ...mapState(['city', 'color'])
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/all.styl"
  .citylist
    position absolute
    top 83px
    left 0
    right 0
    overflow hidden
    bottom 0
  .title
   padding 10px
   box-sizing border-box
   background-color #f5f5f5
  .border-bt
    border-bottom 1px solid #f5f5f5
    &:before
     border-color #00c000
    &:after
     border-color #ff0000
  .nowcitys
    padding 5px
    overflow hidden
    padding-right 25px
    box-sizing border-box
  .nowcity
    padding 5px 20px
    float: left
    border 1px solid #ccc
    margin 5px
    border-radius 3px
  .flex
    display flex
    align-items center
  .van-loading
    width 14px
    height 14px
   .allcity a
    padding: 10px;
    border-bottom: 1px solid #f5f5f5;
    display inline-block
    box-sizing border-box
    width 100%
  .red
    color: #ff0000
  .blue
    color #2362ff
</style>
