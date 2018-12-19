<template>
  <div class="city">
    <cityhead></cityhead>
    <search :citys="citys"></search>
    <citylist  :citys="citys"  :hotcity="hotcity" :letter="letter"></citylist>
    <az :citys="citys" @post="get"></az>
  </div>
</template>

<script>
import axios from 'axios'
import cityhead from '@/components/cityhead'
import search from '@/components/search'
import citylist from '@/components/citylist'
import az from '@/components/AZ'
export default {
  name: 'city',
  components: {
    cityhead,
    search,
    citylist,
    az
  },
  data () {
    return {
      citys: Object,
      hotcity: Array,
      letter: String
    }
  },
  methods: {
    getcity () {
      const that = this
      axios.get('/api/city.json').then(function (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          that.citys = data.cities
          that.hotcity = data.hotCities
        }
      })
    },
    get (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getcity()
  }
}
</script>

<style></style>
