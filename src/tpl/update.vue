<template>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <p>{{ count }}</p>
        <p id="map" ref="where"></p>
        {{city}}
        <p>附近</p>
      <ul>
        <li v-for=" (item, index) in near" :key="index">{{item}}</li>
      </ul>
      <ul>
        <li class="flex" v-for="(item, index) in carts" :key="index">
          <van-checkbox @change="jisuan" v-model="item.checked"></van-checkbox>
          <p>{{item.name}}</p>
          <p class="flex">
            <label @click="reduce(index)" ref="reduce" for="input">-</label>
            <input type="text" name="input" id="input" v-model="item.num" v-on:change="writenum">
            <label @click="add(index)" ref="add" for="input">+</label>
          </p>
          {{item.price}}
        </li>
      </ul>
      <p>总价：{{total}}</p>
      <p @click="submits">提交订单</p>
      <div class="buylist" v-show="show">
        <p @click="close">close</p>
        您购买了
        <p v-for="(item, index) in buycart" :key="index">{{item}}共{{item}}件</p>
        <p>总价：{{total}}</p>
      </div>
      <img src="static/mock/logo2018.png" alt="">
    </van-pull-refresh>
</template>

<script>
import { PullRefresh, Checkbox, CheckboxGroup } from 'vant'
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
Vue.use(PullRefresh)
Vue.use(Checkbox).use(CheckboxGroup)
export default {
  i18n: {
    'zh-CN': {
      text: '刷新次数',
      success: '刷新成功'
    },
    'en-US': {
      text: 'Refresh Count',
      success: 'Refresh success'
    }
  },

  data () {
    return {
      count: 0,
      near: [],
      city: '',
      isLoading: false,
      total: 0,
      buycart: [],
      show: false,
      things: [],
      carts: [
        {name: 'iphone 7', price: 400, num: 2, checked: true},
        {name: 'iphone 8', price: 500, num: 3, checked: false},
        {name: 'iphone 6', price: 100, num: 1, checked: true},
        {name: 'iphone 6s', price: 200, num: 6, checked: false}
      ]
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.$toast('success')
        this.isLoading = false
        this.count++
        this.locations()
      }, 500)
    },
    locations () {
      var that = this
      var map = new BMap.Map(document.getElementById('map'))
      window.onload = function () {
        var point = new BMap.Point(0, 0)
        map.centerAndZoom(point, 16)
        if (navigator.geolocation) {
          var geolocation = new BMap.Geolocation()
          geolocation.getCurrentPosition(showLocation, {enableHighAccuracy: true})
        }else{
          map.addControl(new BMap.GeolocationControl())
        }
      }
      function showLocation (r) {
        if (this.getStatus() === BMAP_STATUS_SUCCESS) {
          var geoc = new BMap.Geocoder()
          geoc.getLocation(new BMap.Point(r.longitude, r.latitude), function (rs) {
            var centerPoint = new BMap.Point(r.longitude, r.latitude)
            map.panTo(centerPoint)
            map.setCenter(centerPoint)
            var mk = new BMap.Marker(centerPoint)
            mk.disableDragging()
            map.addOverlay(mk)
            console.log(rs.addressComponents.province, rs.addressComponents.city)
            that.city = rs.addressComponents.province + rs.addressComponents.city
            let nearadd = Object.values(rs.surroundingPois)
            nearadd.forEach(function (e, i) {
              that.near[i] = e.title
            })
          })
        } else {
          alert('failed' + this.getStatus())
        }
      }
    },
    reduce (index) {
      if (this.carts[index].num > 1) {
        this.carts[index].num--
      }
      this.totals()
    },
    add (index) {
      this.carts[index].num++
      this.totals()
    },
    totals () {
      this.total = 0
      for (let r in this.carts) {
        if (this.carts[r].checked === true) {
          this.total += this.carts[r].price * this.carts[r].num
        }
      }
    },
    jisuan () {
      this.totals()
    },
    submits () {
      this.show = true
      this.totals()
      for (let r in this.carts) {
        if (this.carts[r].checked === true) {
          console.log(this.carts[r])
        }
      }
      console.log(this.buycart)
    },
    close () {
      this.show = false
    },
    get () {
      axios.get('../../static/mock/page.json', qs.stringify())
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    writenum () {
      this.totals()
    }
  },
  created () {
    if (localStorage.carts) {
      this.carts = JSON.parse(localStorage.carts)
    }
  },
  mounted () {
    this.locations()
    this.get()
    this.totals()
  },
  updated () {
    localStorage.carts = JSON.stringify(this.carts)
    layer.msg('更新成功')
  }
}
</script>

<style>
  .van-pull-refresh{
    overflow-y: auto;
    height: 100vh;
    box-sizing: border-box;
    padding-bottom: 5vh;
  }
  #map{
    width: 100%;
    height: 50vh;
  }
  .flex{
    display: flex;
    align-items: center;
  }
  label{
    width: 15px;
    height: 15px;
    text-align: center;
    border: 1px solid #f5f5f5;
  }
  input{
    width: 15px;
    height: 15px;
    text-align: center;
    border: 1px solid #f5f5f5;
  }
  p{white-space: nowrap}
</style>
