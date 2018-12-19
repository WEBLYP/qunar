<template>
  <div class="scroll">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="有赞微商城" name="1">
        提供多样店铺模板，快速搭建网上商城
      </van-collapse-item>
      <van-collapse-item title="有赞零售" name="2">
        网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
      </van-collapse-item>
      <van-collapse-item title="有赞美业" name="3">
        线上拓客，随时预约，贴心顺手的开单收银
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { PullRefresh, Collapse, CollapseItem, Icon, Circle } from 'vant'
import Vue from 'vue'
import 'postcss'
import 'vant/lib/vant-css/index.css'
Vue.use(PullRefresh, Icon, Circle)
Vue.use(Collapse).use(CollapseItem)

export default {
  name: 'Scroll',
  data () {
    return {
      count: 0,
      currentRate: 0,
      activeNames: [],
      isLoading: false
    }
  },

  methods: {
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
    }
  },
  computed: {
    text () {
      return this.currentRate.toFixed(0) + '%'
    }
  }
}
</script>

<style lang="postcss">
  .scroll{background-color: #fff}
</style>
