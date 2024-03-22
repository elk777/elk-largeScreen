import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/layout',
      name: 'layout',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/layout/index.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  let path = to.path
  if (path === '/layout') {
    const body = document.body
    console.log('body', body)
    body.style = ''
  }
  next()
})

export default router
