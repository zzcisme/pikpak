import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const pathResolve = (dir: string) => {
  return resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  console.log(mode)
  return {
    base: mode === 'development' ? '' : '/pikpak',
    resolve: {
      alias: {
        '@': pathResolve('src')
      }
    },
    plugins: [vue()],
    server: {
      proxy: {
        '/v1/pages': {
          target: 'https://api.notion.com',
          changeOrigin: true,
        }
      }
    }
  }
})
