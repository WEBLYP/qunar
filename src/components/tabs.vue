<template>
  <div class="tabs">
    <ul class="flex">
      <li v-for="(item,index) in list" :key="index" @click="tab(index)" :class=" item.class " >{{item.name}}</li>
    </ul>

    <div v-for="(item,index) in pages" :key="index">
      <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight"  mode="out-in">
        <div v-if="item.show"><img :src=' item.src ' alt=""></div>
      </transition>
    </div>

  </div>
</template>

<script>
export default{
  props: ['index'],
  name: 'tabs',
  data () {
    return {
      list: [{name: '一', class: 'active'}, {name: '二', class: ''}, {name: '三', class: ''}],
      news: '',
      pages: [{content: '内容一', show: true, src: 'http://10.0.0.17/testimgs/1.png'}, {content: '内容二', show: false, src: 'http://10.0.0.17/testimgs/2.jpg'}, {content: '内容三', show: false, src: 'http://10.0.0.17/testimgs/3.jpg'}]
    }
  },
  methods: {
    tab (index) {
      this.list.forEach(function (e, index) {
        e.class = ''
      })
      this.pages.forEach(function (e, index) {
        e.show = false
      })
      this.list[index].class = 'active'
      this.pages[index].show = true
    }
  }
}
</script>

<style scoped>
  ul.flex{justify-content: space-between;text-align: center;box-sizing: border-box;}
  ul.flex li{flex: 1;padding:10px;box-sizing: border-box}
  li.active{color: #fff;background-color: #000000}
  img{width: 100%}
</style>
