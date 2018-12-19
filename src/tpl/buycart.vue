<template>
  <div class="buycart">
    <tabs></tabs>
    <span class="iconfont">&#xe658;</span>
    <span class="iconfont">&#xe64a;</span>
  </div>
</template>

<script>
import tabs from '@/components/tabs'
export default{
  components: {
    tabs
  }
}
</script>

<style lang="stylus">
  @import "~@/assets/all.styl"
  .buycart
     background-color : $themeColor
     .iconfont
       font-size 16px
</style>
