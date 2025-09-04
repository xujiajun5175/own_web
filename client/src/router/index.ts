import { createRouter, createWebHistory } from 'vue-router';

// 定义路由
const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Root',
    // 此处可根据实际需求替换为具体的组件
    component: () => import('@/layouts/common.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // 此处可根据实际需求替换为具体的组件
        component: () => import('@/pages/dashboard/index.vue')
      }
    ]
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
