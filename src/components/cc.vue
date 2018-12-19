<template>
  <ul>
    <li v-for="(item, index) in lists" :key="index" :class="item.class" @click="cc(index)">{{item.name}}</li>
  </ul>
</template>

<script>

export default {
  data () {
    return {
      lists: [{name: '红', class: 'red'}, {name: '黄', class: 'yellow'}, {name: '蓝', class: 'blue'}]
    }
  },
  methods: {
    cc (index) {
      const cla = this.lists[index].class
      this.$store.dispatch('cc', cla)
    }
  }
}
</script>

<style scoped>
  ul{ width: 100%;  position: fixed;  bottom: 0;  display: flex;  justify-content: space-around;background-color: #fff}
  li{text-align: center;flex: 1;padding: 10px 0}
  .red{color: #ff0000}
  .yellow{color: #ff0}
  .blue{color: #2362ff}
</style>
