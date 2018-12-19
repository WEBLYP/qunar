<template>
  <ul class="AZ">
    <li class="item" v-for="(item, key) in citys" :key="key" @click="goto" >{{key}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    citys: Object
  },
  methods: {
    goto (e) {
      const vals = e.target.innerText
      this.$emit('post', vals)
      console.log(this.$router)
      const a = []
      for (var i = 0; i < 10; i++) {
        a.push(i)
      }
      console.log(a)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .AZ
   position absolute
   top 83px
   display flex
   flex-direction column
   justify-content center
   width 25px
   right 0
   color #2362ff
   text-align center
   bottom 0
   .item
    line-height 15px
</style>
