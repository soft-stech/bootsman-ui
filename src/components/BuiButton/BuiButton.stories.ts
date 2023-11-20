import type { Meta, StoryObj } from '@storybook/vue'

import Button from './BuiButton.vue'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'outline', 'text'],
      control: { type: 'radio' }
    },
    size: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'radio' }
    },
    disabled: {
      options: [true, false],
      control: { type: 'checkbox' }
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    color: 'primary'
  }
  // render: () => ({
  //   components: { Button },
  //   template: '<Button color="primary">Button</Button>'
  // })
}

export const Secondary: Story = {
  args: {
    color: 'secondary'
  }
  // render: () => ({
  //   components: { Button },
  //   template: '<Button color="secondary">Button</Button>'
  // })
}

export const Outline: Story = {
  args: {
    color: 'outline'
  }
  // render: () => ({
  //   components: { Button },
  //   template: '<Button color="outline">Button</Button>'
  // })
}

export const Text: Story = {
  args: {
    color: 'text'
  }
  // render: () => ({
  //   components: { Button },
  //   template: '<Button color="text">Button</Button>'
  // })
}
