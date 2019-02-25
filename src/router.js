import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Requests from './views/requests.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/requests',
      name: 'requests',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/requests.vue')
    }
  ]
})
