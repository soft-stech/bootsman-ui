import type { StorybookConfig } from '@storybook/vue-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    '@storybook/addon-themes'
  ],
  framework: {
    name: '@storybook/vue-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
}
export default config
