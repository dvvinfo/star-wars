import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()

import HomePage from '@/pages/homePage.vue'
import AboutPage from '@/pages/aboutPage.vue'
import NotFoundPage from '@/pages/notFoundPage.vue'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },

    {
      path: '/:CatchAll(.*)',
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})

export default routers
