<template>
  <div>Dashboard</div>
</template>

<script>
import { defineComponent } from 'vue'
//import axios from 'axios'
//import LineChart from './LineChart.vue' // Or LineChart.js
//import BarChart from './BarChart.vue' // Or LineChart.js

export default defineComponent({
  name: 'Dashboard',
  components: {
    //LineChart, BarChart
  },
  //extends: Bar,
  data() {
    return {
      sales: {
        isLoaded: false,
        chartData: null,
      },
      orders: {
        isLoaded: false,
        chartData: null,
      },
      isActive: false,
    }
  },
})
</script>
