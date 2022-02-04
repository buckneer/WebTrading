<template>
  <div id="app">
    <Navigation></Navigation>
    <div id="main_content">
      <app-router></app-router>
    </div>
    <Footer></Footer>


  </div>
</template>

<script>

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppRouter from "@/components/AppRouter";

export default {

  name: 'App',
  data() {
    return {
      loggedIn: true
    }
  },
  components: {
    Navigation,
    Footer,
    AppRouter
  },
  methods: {
    goTo(route) {
      window.location = route;
    }
  }
}
</script>

<style lang="scss">




</style>
