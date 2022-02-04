<template>
  <div class="container mt-5">
    <h1 class="d-flex justify-content-center">My Trades</h1>
    <div class="row">
      <div v-for="item in data" :key="item.name" class="col-lg-5 m-3">
        <TradingBlock :chart="item.name" :desc="item.desc"></TradingBlock>
      </div>
    </div>
    <div class="row">
      <button class="btn btn-warning" @click="goTo('/trades')">See all Trades</button>
    </div>
  </div>
</template>

<script>
import TradingBlock from "@/components/TradingBlock";
export default {
  name: "MyTrade",
  components: {
    TradingBlock
  },
  props: ["data"],
  data() {
    return {

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
