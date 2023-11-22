import type { Meta, StoryObj } from '@storybook/vue'

import BuiToggle from './BuiToggle.vue'

const meta: Meta<typeof BuiToggle> = {
  component: BuiToggle,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    label: 'Private Registry',
    modelValue: false
  }
}

export default meta
type Story = StoryObj<typeof BuiToggle>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}
