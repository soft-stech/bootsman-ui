import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'bootsmanUI'
    },
    rollupOptions: {
      external: ['vue-demi'],
      output: [
        {
          exports: 'named',
          format: 'cjs'
        },
        {
          format: 'es'
        },
        {
          format: 'umd',
          name: 'BootsmanUi',
          globals: {
            'vue-demi': 'VueDemi'
          }
        }
      ]
    },
    minify: true
  }
})
