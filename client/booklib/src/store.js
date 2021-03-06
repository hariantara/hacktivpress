import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router/index'

vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser: [],
    signupuser: [],
    data: []
  },
  mutation: {
    saveUserData (state, payload) {
      state.signupuser = payload
    },
    read (state, payload) {
      state.data = payload
    }
  },
  actions: {
    loginAxios (store, payload) {
      console.log('PAYLOAD LOGIN AXIOS', payload)
      axios.post('http://localhost:3000/users/signin', {
        username: payload.username,
        password: payload.password
      })
      .then((response) => {
        console.log('===>', response)
        this.state.loginUser = response.data
        localStorage.setItem('token', response.data)
        router.push('/home')
      })
    },
    loginUpAxios (store, payload) {
      axios.post('http://localhost:3000/users/signup', {
        username: payload.username,
        password: payload.password
      })
      .then((response) => {
        store.commit('saveUserData', response.data)
      })
    },
    readAll (store. payload) {
      axios.get('http://localhost:3000/books/read')
      .then((response) => {
        store.commit('read', response.data)
      })
    }
  }
})
