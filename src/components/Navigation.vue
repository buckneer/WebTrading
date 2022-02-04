<template>

  <header>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="navbar-brand">
          <img src="~@/assets/logo.svg" height="40" width="40" @click="goto('/')" alt="logo"/>
<!--          <span class="brand-name m-2">Web Trading</span>-->
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <form>
            <div class="input-group" style="">
                <img class="input-group-text" src="../assets/icons/search.svg" alt="search"  id="basic-addon1" height="40" width="40"/>
              <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
            </div>
          </form>
          <ul v-if="loggedIn" class="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li class="nav-item m-2">
              <a class="nav-link button custom-button" type="submit" @click="login">Login</a>
            </li>
            <li class="nav-item m-2">
              <a class="nav-link button custom-button-outlined" type="submit">Register</a>
            </li>
          </ul>
          <ul v-if="!loggedIn" class="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li class="nav-item m-2">
              <a class="nav-link button custom-button" type="submit" @click="logout">Logout</a>
            </li>
            <li class="nav-item m-2">
              <a class="nav-link button custom-button-outlined" type="submit" @click="goto('/mytrades')">My Trades</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>

  </header>

</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      loggedIn: true
    }
  },
  methods: {
    logout() {
      this.loggedIn = true;
      console.log(this.loggedIn)
    },
    login() {
      this.loggedIn = false;
      console.log(this.loggedIn)
    },
    goto(route) {
      window.location = route;
    }
  }
}
</script>

<style lang="scss">


.brand-name {
  color: #FFC107;
}

.input-group {
  min-width: 400px;
}

.input-group-text {
  background-color: #0b0d0e !important;
  color: #fff !important;
  border: 0 !important;

}

.form-control {
  background-color: #0b0d0e !important;
  border: 0 !important;
  color: #FFF !important;
}


.button {
  padding: 5px 20px !important;
  border-radius: 10px;
  color: #FFC107 !important;
}

.custom-button {
  margin: 1px 0;
  &:hover {
    background-color: #394047;
  }
}
.custom-button-outlined {
  border: 1px solid #FFC107;
  &:hover {
    background-color: #394047
  }
}

</style>
