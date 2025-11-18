<template>
  <div class="w-screen h-screen flex flex-col box-border ">
    <header class="h-14 bg-slate-2">2222</header>
    <div class="flex flex-1 overflow-hidden">
      <nav class="w-54 h-full bg-slate-3 flex flex-col gap-2  p-2 box-border">
        <RouterLink :to="item.path" class=" min-h-12 flex items-center justify-center bg-red-2" v-for="item in menus" :key="item.path">
          {{ item.name }}
        </RouterLink>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {RouterLink, useRouter } from 'vue-router'
  const router = useRouter()
  const menus = router.getRoutes()?.filter((v:any)=>!(v.path as string).startsWith('/error')) || []
</script>


