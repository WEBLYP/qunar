<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <p>刷新次数: {{ count }}</p>
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item + ''" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { List, Cell, CellGroup, PullRefresh } from 'vant'
import Vue from 'vue'
Vue.use(Cell).use(CellGroup)
Vue.use(List, PullRefresh)
export default {
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      count: 0,
      isLoading: false
    }
  },

  methods: {
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        this.loading = false

        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    },
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
    }
  }
}
</script>
<style></style>
