import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Unocss from "unocss/vite"
import vueDevTools from 'vite-plugin-vue-devtools'
import path from "node:path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
     vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
