import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue2'

export default defineConfig({
  plugins: [HstVue()],
  setupFile: 'src/histoire-setup.ts',
  theme: {
    title: 'Bootsman-ui',
    logo: {
      square: './src/assets/logo.png',
      light: './src/assets/logo-full.png',
      dark: './src/assets/logo-full-dark.png'
    },
    logoHref: 'https://github.com/soft-stech/bootsman-ui'
  }
})
