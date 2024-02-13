<!-- https://apexcharts.com/vue-chart-demos/line-charts/basic/ -->
<template>
  <div id="chart">
    <apexcharts type="line" height="350" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script setup>
import Apexcharts from 'vue3-apexcharts';
import {ref} from "vue";

const series = ref([
  {
    name: "전체 발행금액",
    data: Array.from({ length: 9 }, () => Math.floor(Math.random() * (1000 - 100 + 1)) + 100)
  },
  {
    name: "단독형 발행금액",
    data: Array.from({ length: 9 }, () => Math.floor(Math.random() * (1000 - 100 + 1)) + 100)
  },
  {
    name: "연동형 발행금액",
    data: Array.from({ length: 9 }, () => Math.floor(Math.random() * (1000 - 100 + 1)) + 100)
  }
]);

const chartOptions = ref({
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
  }
});
</script>