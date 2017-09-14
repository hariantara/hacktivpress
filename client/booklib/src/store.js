import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router/index'

vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser: []
  },
  mutation: {
    isLogin (state. payload) {
      state.loginUser = payload
    }
  },
  actions: {
    loginAxios (store, payload) {
      axios.post('http://localhost:3000/users/signin', {
        username: payload.username,
        password: payload.password
      })
      .then((data) => {
        store.commit('islogin', data.data)
      })
    }
  }
})
