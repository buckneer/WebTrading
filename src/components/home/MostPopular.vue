<template>
  <section id="most-popular">
    <div class="container mt-5">
      <h1 class="d-flex justify-content-center">Most Popular</h1>
      <h4 class="d-flex justify-content-center">___</h4>
      <p class="d-flex justify-content-center">Check out our most popular currencies</p>
      <div class="row">
        <div class="col-lg-5 m-3">
          <TradingBlock :chart="second" :desc="secondDesc"></TradingBlock>
        </div>
        <div class="col-lg-5 m-3">
          <TradingBlock :chart="first" :desc="firstDesc"></TradingBlock>
        </div>

      </div>
    </div>
  </section>
</template>

<script>

import TradingBlock from "@/components/TradingBlock";

export default {
  name: "MostPopular",
  components:
      {TradingBlock},
  data() {
    return {
      second: "Tesla",
      first: "Bitcoin",
      firstDesc: "Bitcoin is the most popular cryptocurrency",
      secondDesc: "Tesla is electric vehicle company"
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
