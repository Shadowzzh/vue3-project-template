import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        label: 'Home',
        type: 'success',
        name: 'PostsView',
      },
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        label: 'About',
        type: 'success',
        name: 'AboutView',
      },
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/project',
      name: 'project',
      meta: {
        label: 'Project',
        type: 'warning',
        name: 'ProjectView',
      },
      component: () => import('../views/ProjectView.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      meta: {
        label: 'Posts',
        type: 'info',
        name: 'PostsView',
      },
      component: () => import('../views/PostsView.vue'),
    },
    {
      path: '/summer',
      name: 'summer',
      meta: {
        label: 'Summer',
        type: 'success',
        name: 'SummerView',
      },
      component: () => import('../views/SummerView.vue'),
    },
  ],
})

export default router
