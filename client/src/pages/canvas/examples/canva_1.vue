<script setup lang='ts'>
  defineOptions({ name: 'canvas1' })
  import { useTemplateRef, onMounted, ref } from 'vue'
  const cvsRef = useTemplateRef('canvasRef')
  const containerRef = useTemplateRef('containerRef')
  const ctxRef = ref<CanvasRenderingContext2D | null | undefined>(null)
  function init() {
    if (!cvsRef.value || !containerRef.value) return
    cvsRef.value.width = containerRef.value?.clientWidth * devicePixelRatio || 0
    console.log("🚀 ~ init ~ containerRef:", containerRef);
    cvsRef.value.height = containerRef.value?.clientHeight * devicePixelRatio || 0
    ctxRef.value = cvsRef.value?.getContext('2d')
    if (!ctxRef.value) return
    const p1 = new Point()
    const p2 = new Point()
p1.draw()
p2.draw()



  }

  onMounted(() => {
    init()
  })


  function getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  class Point {
    constructor() {
      this.r = 6
      this.x = getRandom(0, cvsRef.value?.width || 0 - this.r / 2)
      this.y = getRandom(0, cvsRef.value?.height || 0 - this.r / 2)
    }


    draw() {

      ctxRef.value.beginPath()
      ctxRef.value.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      ctxRef.value.fillStyle = '#fff'
      ctxRef.value.fill()
    }
  }
</script>

<template>
  <div ref="containerRef" class="w-full h-full overflow-hidden">
    <canvas ref="canvasRef" class=" bg-#222"></canvas>
  </div>
</template>

<style scoped></style>
