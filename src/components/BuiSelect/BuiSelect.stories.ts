import type { Meta, StoryObj } from '@storybook/vue'

import BuiSelect from './BuiSelect.vue'

const meta: Meta<typeof BuiSelect> = {
  component: BuiSelect,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      constols: 'boolean'
    },
    label: {
      controls: 'text'
    },
    required: {
      constols: 'boolean'
    },
    placeholder: {
      controls: 'text'
    }
  },
  args: {
    disabled: false,
    label: 'My Label',
    options: [
      { name: 'One', value: 'one' },
      { name: 'Two', value: 'two' }
    ]
  }
}

export default meta
type Story = StoryObj<typeof BuiSelect>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    label: 'Default'
  }
}
