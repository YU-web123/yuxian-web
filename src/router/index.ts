import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Products from '@/views/Products.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/products/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

export default router 