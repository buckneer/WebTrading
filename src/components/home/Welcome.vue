<template>

  <section id="hero-section" class=" p-5">
    <div class="container">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6 ">
          <!--          image-->
          <img class="d-block mx-lg-auto img-fluid" alt="invest" src="../../assets/icons/undraw_investing_re_bov7.svg" width="700" height="500"/>
        </div>
        <div class="col-lg-6">
<!--          Text-->
          <h2 class="display-5 fw-bold lh-1 mb-3 text-warning">Welcome to</h2>
          <h1><span> Web Trading</span></h1>
          <p>Best Web application to do online trading, follow stocks, sell and buy. Practice your trading skills with our demo account, or use real money</p>
          <button class="btn btn-warning" @click="goto('/trades')">Start Trading</button>
        </div>

      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "Welcome",
  methods: {
    goto(routes) {
      window.location = routes
    }
  }
}
</script>

<style lang="scss"  scoped>

</style>
