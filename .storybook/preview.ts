import type { Preview } from '@storybook/vue'
import '../src/assets/main.css'
import '@fontsource-variable/inter'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'centered'
  }
}

export default preview
