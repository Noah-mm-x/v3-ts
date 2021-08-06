import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '/@src/': '/src/',
      '/@api/': '/src/api/',
      '/@pages/': '/src/pages/',
      '/@components/': '/src/components/',
      '/@store/': '/src/store/',
      '/@img/': '/src/assets/img/'
    }
  },
  // server:{
  //   host:'', // 主机
  //   prot: 3000, // 端口
  //   https: true, // 是否开启 https
  //   open: false, // 是否在浏览器自动打开
  //   proxy: {
  //     '/api': {
  //       target: 'http://jsonplaceholder.typicode.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     },
  //   }
  // }
})
