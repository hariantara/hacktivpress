import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router/index'

vue.use('Vuex')

exports default new Vuex.Store({
  state: {
    userLogin: []
  },
  mutations: {
  },
  actions: {
    login (store, payload) {
      axios.post('http:3000/users/signin', {
        username: payload.username,
        password: payload.password
      })
      .then((dataLogin) => {
        console.log(dataLogin);
      })
    }
  }
})
