<template>
  <div id="main_content">
    <Welcome></Welcome>
    <MostPopular></MostPopular>
    <ExampleOptions></ExampleOptions>
  </div>
</template>

<script>
import Welcome from "@/components/home/Welcome";
import MostPopular from "@/components/home/MostPopular";
import ExampleOptions from "@/components/home/ExampleOptions";
export default {
  name: "Home",
  components: {
    Welcome,
    MostPopular,
    ExampleOptions,
  },
}
</script>

<style scoped>

</style>
