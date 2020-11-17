import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/main_page/MainPage.vue'
import Cart from '../pages/cart/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component:Cart
  }
]
const router = new VueRouter({
  routes
})
export default router
