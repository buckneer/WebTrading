<template>
  <section id="most-popular">
    <div class="container mt-5">
      <h1 class="text-center">See Examples</h1>
      <div class="row ms-auto">
        <div v-for="item in exampleData" :key="item.name" class="col-lg-5 m-3">
          <TradingBlock :chart="item.name" :desc="item.desc"></TradingBlock>
        </div>
      </div>
      <button class="btn btn-warning d-flex m-auto" @click="goTo('/trades')">Go to Trades</button>
    </div>

  </section>
</template>

<script>
import TradingBlock from "@/components/TradingBlock";

export default {
  name: "ExampleOptions",
  components:
      {TradingBlock},
  data() {
    return {
      exampleData: [
        {
          "name": "Doge",
          "desc": "Tesla is electric vehicle company"
        },
        {
          "name": "HelloCoiin",
          "desc": "Bitcoin is the most popular cryptocurrency"
        },
        {
          "name": "Crypto",
          "desc": "New cryptocurrency",
        },
        {
          "name": "dzoni",
          "desc": "Music trading"
        }
      ]
    }
  },
  methods: {
    goTo(route) {
      window.location = route;
    }
  }
}
</script>

<style scoped>

</style>
