import { createRouter, createWebHistory } from 'vue-router';
import CommonLayout from '@/layouts/common.vue';
const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    name: 'Root',
    component: CommonLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/pages/dashboard/index.vue')
      },
    ]
  },
  {
    path: '/w3c',
    redirect: '/w3c/css',
    name: 'W3C',
    component: CommonLayout,
    children: [
      {
        path: 'css',
        name: 'css',
        redirect: '/w3c/css/dashboard',
        children: [
          {
            path: 'dashboard',
            name: 'css-dashboard',
            component: () => import('@/pages/w3c/css/index.vue'),
          },
          {
            path: 'flex',
            name: 'flex',
            component: () => import('@/pages/w3c/css/flex/index.vue')
          },
        ]
      },
      {
        path: 'wasm',
        name: 'wasm',
        component: () => import('@/pages/w3c/wasm/index.vue')
      },
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/pages/error/404.vue') },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
});


console.log(router.getRoutes());

export default router;
