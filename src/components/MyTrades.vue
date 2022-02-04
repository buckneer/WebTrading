<template>
  <div id="main_content">
    <MyTrade :data="data"></MyTrade>
  </div>
</template>

<script>
import MyTrade from "@/components/mytrades/MyTrade";
import mytrades from "@/assets/mytrades";
export default {
  name: "MyTrades",
  components: {MyTrade},
  data() {
    return {
      data: mytrades.trades
    }
  }
}

</script>

<style scoped>

</style>
