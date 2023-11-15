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
      name: 'bootsmanUI',
      formats: ['umd', 'es'],
      fileName: (format) => `bootsman-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue-demi'],
      output: {
        esModule: true,
        exports: 'named',
        globals: {
          'vue-demi': 'VueDemi'
        }
      }
    },
    minify: true
  }
})
