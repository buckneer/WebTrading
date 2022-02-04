<template>
  <div class="container mt-5">
    <h1 class="d-flex justify-content-center">All Trades</h1>
    <div class="row">
      <div v-for="item in exampleData" :key="item.name" class="col-lg-5 m-3">
        <AllTradesBlock :chart="item.name" :desc="item.desc" @data="update" :bought="false"></AllTradesBlock>
      </div>
    </div>
    <h1 class="d-flex justify-content-center">My Trades</h1>
    <div class="row">
      <div v-for="item in data" :key="item.name" class="col-lg-5 m-3">
        <AllTradesBlock :chart="item.name" :desc="item.desc" :bought="true" @remove-data="remove"></AllTradesBlock>
      </div>
      <div v-if="!data.length">
        <div class="container m-auto d-flex justify-content-center">
          <img src="../../assets/icons/undraw_empty_cart_co35.svg" alt="Empty cart" height="448" width="596"/>
        </div>
        <h3 class="d-flex justify-content-center text-warning mt-5">Your trades are empty</h3>
      </div>
    </div>
  </div>
</template>

<script>
import AllTradesBlock from "@/components/AllTradesBlock";

export default {
  name: "Trades",
  components:
      {AllTradesBlock},
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
        },
        {
          "name": "helloWorld",
          "desc": "Hello World app trading"
        }
      ],
      data: []
    }
  },
  methods: {
    update(data) {
      let item = {
        "name": data.name,
        "desc": data.desc
      }
      if(!data.bought) {
        this.data.push(item)
        let index = this.exampleData.findIndex(x => x.name === item.name)
        console.log(index)
        if(index > -1) {
          this.exampleData.splice(index, 1)
        }
      } else {
        let index = this.data.indexOf(item)
        console.log(index)
      }

    },
    remove(item) {

      // let index = this.data.findIndex(x => x.name === item)
      console.log(item)
      // if(index > -1) {
      //   this.data.splice(index, 1)
      // }
    }
  }
}
</script>

<style scoped>

</style>
