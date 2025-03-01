import { createRouter, createWebHistory } from 'vue-router'
import Task3 from '@/views/Task3.vue'

const routes = [
  { path: '/', component: Task3 },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
