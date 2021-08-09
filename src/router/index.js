import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Detailcharacter from '../views/Detailcharacter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/home/:id',
    name: 'Home',
    component: Home
  },
  {
    path: '/detailcharacter/:id',
    name: 'Detailcharacter',
    props: true,
    component: Detailcharacter
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
