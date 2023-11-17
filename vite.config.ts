import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { version } from 'vue'
import { parse } from 'semver'
import AutoImport from 'unplugin-auto-import/vite'
const { major, minor } = parse(version)
const fileExtensionMap = {
  es: 'mjs',
  cjs: 'cjs',
  iife: 'js',
  umd: 'js'
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    cssCodeSplit: true,
    target: 'esnext',
    lib: {
      formats: ['es', 'cjs', 'umd'],
      entry: resolve(__dirname, './src/index.ts'),
      name: 'bootsman-ui',
      fileName: (format: keyof typeof fileExtensionMap) => {
        return `index.${format}.${fileExtensionMap[format]}`
      }
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
