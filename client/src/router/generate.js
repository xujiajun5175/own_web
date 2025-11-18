import CommonLayout from '@/layouts/common.vue';
import { defineAsyncComponent } from 'vue'


const modules = import.meta.glob('@/pages/**/*.vue', { eager: false })


const getRoutePath = (path) => {
  console.log("🚀 ~ getRoutePath ~ path:", path);
  // 提取 views 后的路径（如 ../views/home/index.vue → home/index）
  const relativePath = path.replace('/src/pages/', '').replace('.vue', '')
  // 处理首页（index.vue → /）
  if (relativePath === 'index') return '/'
  // 处理目录下的 index.vue（home/index → /home）
  // if (relativePath.endsWith('/index')) {
  //   return `/${relativePath.replace('/index', '')}`
  // }
  // 其他情况（如 about → /about，user/[id] → /user/:id）
  return `/${relativePath}`
}


const getRouteName = (path) => {
  return path
    .replace('/src/pages/', '')
    .replace('.vue', '')
    .replace(/\//g, '>>')
    .replace(/\[(\w+)\]/g, '$1') // 处理动态路由参数
    .replace(/>>index$/, '') // 剔除最后的index
}

export const generateRoutes = () => {
  const routes = []
  Object.entries(modules).forEach(([filePath, module]) => {
    // 跳过非页面组件（如以 _ 开头的私有组件）
    if (filePath.includes('/_')) return

    const routePath = getRoutePath(filePath)
    const routeName = getRouteName(filePath)

    routes.push({
      path: routePath,
      name: routeName,
      component: defineAsyncComponent(module), // 异步加载组件
      meta: {
        layout: CommonLayout // 指定默认布局（可在页面组件中覆盖）
      }
    })
  })
  return routes
}
