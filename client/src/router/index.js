// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { generateRoutes } from './generate'

// 生成自动路由
const autoRoutes = generateRoutes()

// 基础路由（如登录页，不需要布局）
const baseRoutes = [
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('../views/login/index.vue'),
  //   meta: { layout: null } // 不使用布局
  // }
]

const routes = [...baseRoutes, ...autoRoutes]
console.log("🚀 ~ routes:", routes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router