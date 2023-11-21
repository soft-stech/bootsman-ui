import type { Meta, StoryObj } from '@storybook/vue'

import BuiTag from './BuiTag.vue'

const meta: Meta<typeof BuiTag> = {
  component: BuiTag,
  tags: ['autodocs'],
  argTypes: {
    dissmisable: {
      constols: 'boolean'
    }
  },
  args: {
    dissmisable: false
  }
}

export default meta
type Story = StoryObj<typeof BuiTag>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

export const Dismissable: Story = {
  args: {
    dissmisable: true
  }
}
