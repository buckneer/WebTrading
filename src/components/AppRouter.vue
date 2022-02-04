<template>
  <component :is="routedComponent"></component>
</template>

<script>

import Home from "@/components/Home";
import Trade from "@/components/Trade";
import MyTrades from "@/components/MyTrades";

const routes = {
  "/" : Home,
  "/trades": Trade,
  "/mytrades": MyTrades
}

export default {
  data() {
    return {
      current: window.location.pathname
    }
  },
  computed: {
    routedComponent() {
      return routes[this.current];
    }
  }

}
</script>

<style scoped>

</style>
