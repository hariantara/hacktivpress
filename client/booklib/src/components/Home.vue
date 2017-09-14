<template>
  <div class="">
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Hacktiv Press</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
      <ul class="nav navbar-nav">
        <li><a href="#">Category</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="">Login</a></li>
        <li><a href="" @click='logout()'>Log Out</a></li>
      </ul>
    </div>
  </div>
</nav>

    <div class="login">
      <Login></Login>
    </div>
    <div class="data" v-for="book in book">
      <p>{{ book.title}}</p>
      <p>{{ book.category}}</p>
      <p>{{ book.content}}</p>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login'
import { mapActions } from 'vuex'
// import Logup from '@/components/Logup'
export default {
  name: 'home',
  components: {
    Login
    // Logup
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      token: localStorage.getItem('token')
    }
  },
  computed () {
    book () {
      return this.$store.state.data
    }
  },
  methods: {
    ...mapActions([
      'readAll'
    ])
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/home')
    }
  },
  mounted () {
    this.readAll()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
