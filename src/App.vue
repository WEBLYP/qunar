<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/><!--当前路由地址显示的内容-->
  </div>
</template>

<script>
import '@/assets/css/reset.css'
import '@/assets/css/border.css'
export default {
  name: 'App'
}
</script>

<style>
.flex{display: flex;align-items: center}
</style>
