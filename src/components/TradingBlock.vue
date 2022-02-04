<template>
  <div data-aos="zoom-in" class="container shadow-sm">

    <div class="heading text-center">
      <h3>{{ chart }}</h3>
      <p>{{ desc }}</p>
    </div>
    <div class="graph">
      <canvas :id="chart"></canvas>
    </div>
  </div>
</template>

<script>

import Chart from 'chart.js';
import planetChartData from "../assets/planet-data";


export default {
  name: "TradingBlock",
  props: [
    'chart', 'desc'
  ],
  data() {
    return {
      planetChartData: planetChartData
    }
  },
  mounted() {
    const ctx = document.getElementById(this.chart);
    new Chart(ctx, this.planetChartData)
  }
}
</script>

<style scoped>

</style>
