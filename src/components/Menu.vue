<template>
  <div class="menu">
    {{ title }}
  </div>
</template>

<script>
export default{
  data () {
    return {
      title: '1111'
    }
  },
  created () {
    this.title = new Date()
  }
}
</script>

<style lang="css">
.menu{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  z-index: 999;
  background: #f00;
}
</style>
