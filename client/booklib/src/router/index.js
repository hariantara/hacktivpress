import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Logup from '@/components/Logup'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: '/home/login',
        name: 'login',
        component: Login
      }]
    },
    {
      path: '/signup',
      name: 'signup',
      component: Logup
    }
  ]
})
