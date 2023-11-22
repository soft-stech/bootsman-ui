import type { Meta, StoryObj } from '@storybook/vue'

import BuiModal from './BuiModal.vue'

const meta: Meta<typeof BuiModal> = {
  component: BuiModal,
  tags: ['autodocs'],
  argTypes: {
    dissmisable: {
      constols: 'boolean'
    }
  },
  args: {
    dissmisable: true
  },
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof BuiModal>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}
