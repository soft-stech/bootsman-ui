import type { Meta, StoryObj } from '@storybook/vue'

import BuiInput from './BuiInput.vue'

const meta: Meta<typeof BuiInput> = {
  component: BuiInput,
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
    },
    validationStatus: {
      oprions: ['error', 'success', undefined]
    }
  },
  args: {
    disabled: false,
    label: 'My Label',
    placeholder: ''
  }
}

export default meta
type Story = StoryObj<typeof BuiInput>

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

export const Placeholder: Story = {
  args: {
    placeholder: 'My placeholder'
  }
}

export const ErrorMessage: Story = {
  args: {
    validationStatus: 'error'
  }
}

export const SuccessMessage: Story = {
  args: {
    validationStatus: 'success'
  }
}
