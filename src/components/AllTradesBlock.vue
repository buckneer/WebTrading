<template>
  <div data-aos="zoom-in" class="container shadow-lg rounded">

    <div class="heading text-center pt-3">
      <h3>{{ chart }}</h3>
      <p>{{ desc }}</p>
    </div>
    <div class="graph">
      <canvas :id="chart"></canvas>
    </div>
    <div v-if="!bought" class="d-flex m-auto justify-content-center add-item pb-3 pt-1">
      <button class="btn btn-warning" @click="saveTrade(chart, desc)">Buy Trade</button>
    </div>
    <div v-if="bought" class="d-flex m-auto justify-content-center add-item pb-3 pt-1">
      <button class="btn btn-warning" @click="saveTrade(chart, desc)">Sell Trade</button>
    </div>
  </div>

</template>

<script>

import Chart from 'chart.js';
import planetChartData from "../assets/planet-data";


export default {
  name: "AllTradesBlock",
  props: [
    'chart', 'desc', 'bought'
  ],
  data() {
    return {
      planetChartData: planetChartData,
      itemBought: false
    }
  },
  methods: {
    saveTrade(name, desc) {
      let item = {
        "name": name + ' new',
        "desc": desc,
        "bought": this.bought
      }
      this.$emit("data", item)
    },
  },
  mounted() {
    const ctx = document.getElementById(this.chart);
    new Chart(ctx, this.planetChartData)
  }
}
</script>

<style scoped>

</style>
