<template lang="html">
  <div class="container">
    <div class="row">
      <h2>Signup Form</h2>
      <form>
        <div class="container">
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required v-model='signup.username'>
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required v-model='signup.password'>
          <button type="button" @click='loginUpform()'>Login</button>
          <!-- <router-link :to="'/home'"><button type="button" v-on:click="loginUser()">Login</button></router-link> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      signup: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'loginUpAxios'
    ]),
    loginUpform () {
      this.loginUpAxios(this.signup)
      alert('Success Signup')
    }
  }
}
</script>

<style lang="css">
</style>
