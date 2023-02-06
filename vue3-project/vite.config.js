// 这是vite配置文件
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import vueJsx from '@vitejs/plugin-vue-jsx'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 支持vant(v3)组件按需加载
    styleImport({
      resolves: [VantResolve()],
    }),
    // 支持JSX写法
    vueJsx()
  ],
  resolve: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 8000,
    proxy: {
      '/api': {
        target: ' https://cnodejs.org',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
