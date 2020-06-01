import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../views/msite/Msite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: Msite
  },
  {
    path: '/msite',
    name: 'Msite',
    component: () => import('../views/msite/Msite.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
