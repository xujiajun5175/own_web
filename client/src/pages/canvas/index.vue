<script setup lang='ts'>
  import { ref } from 'vue';
  defineOptions({ name: 'Canvas' })


  import { useRouter } from 'vue-router'
  const router = useRouter()
  const examples = (() => router.getRoutes()?.filter(v => v.path?.includes('/canvas/examples')))()
  function getLastPart(str: any) {
    if (!str) return ''
    const separator = '>>';
    const lastIndex = str.lastIndexOf(separator);
    // 如果没找到分隔符，返回原字符串；否则返回分隔符后面的部分
    return lastIndex === -1 ? str : str.slice(lastIndex + separator.length);
  }
</script>

<template>
  <div class="w-full h-full flex p-2 box-border">
    <div class="w-50 h-max flex flex-col gap-2 p-2 box-border  bg-gray-100">
      <strong>示例</strong>
      <div class="w-50  shrink-0">
        <RouterLink :to="v.path" v-for="v in examples" :key="v.path">{{ getLastPart(v.name) }}</RouterLink>
      </div>
    </div>
  </div>
</template>

