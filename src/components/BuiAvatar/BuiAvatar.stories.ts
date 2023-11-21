import type { Meta, StoryObj } from '@storybook/vue'

import BuiAvatar from './BuiAvatar.vue'

const meta: Meta<typeof BuiAvatar> = {
  component: BuiAvatar,
  tags: ['autodocs'],
  argTypes: {
    img: {
      controls: 'text'
    }
  },
  args: {
    img: 'https://dummyimage.com/300x300/000/fff'
  }
}

export default meta
type Story = StoryObj<typeof BuiAvatar>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {}
export const Placeholder: Story = {
  args: {
    img: ''
  }
}
