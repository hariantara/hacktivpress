import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import router from './router/index'

vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLogin: []
  },
  mutations: {
    login (state, payload) {
      state.userLogin = payload
    }
  },
  actions: {
    login (store, payload) {
      axios.post('http://localhost:3000/users/signin', {
        username: payload.username,
        password: payload.password
      })
      .then((dataLogin) => {
        console.log(dataLogin)
        store.commit('login', dataLogin.data)
      })
    }
  }
})
