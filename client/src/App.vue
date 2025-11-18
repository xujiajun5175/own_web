<!-- src/App.vue -->
<template>
  <!-- 根据路由 meta.layout 渲染布局 -->
  <component :is="currentLayout">
    <!-- 布局内部会通过 <router-view> 渲染页面组件 -->
  </component>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// 获取当前路由对应的布局（默认使用 Layout）
const currentLayout = computed(() => {
  return route.meta.layout || (() => import('@/layouts/common.vue'))
})
</script>