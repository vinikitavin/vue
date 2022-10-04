import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardPage from '@/components/DashboardPage.vue'
import LoginForm from '@/components/LoginForm.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginForm },
  { path: '/dashboard', component: DashboardPage }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
