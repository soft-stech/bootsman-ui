import type { Meta, StoryObj } from '@storybook/vue'

import Alert from './BuiAlert.vue'

const meta: Meta<typeof Alert> = {
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'boolean' }
    },
    type: {
      options: ['error']
    }
  },
  args: {
    icon: true,
    type: 'error'
  }
}

export default meta
type Story = StoryObj<typeof Alert>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Error: Story = {}
