import { createRouter, createWebHistory } from 'vue-router'
import cart from './routes/cart'
import favorites from './routes/favorites'
import home from './routes/home'
import product from './routes/product'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...home,
    ...cart,
    ...favorites,
    ...product,

    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/notFound/NotFoundView.vue'),
    },
  ],
})

export default router
