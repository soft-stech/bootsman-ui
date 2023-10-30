import { shallowMount } from '@vue/test-utils'
import BuiButton from './BuiButton.vue'
import { describe, expect, test } from 'vitest'
import { ButtonColor } from './types'
import type { TestWrapper } from '../../types/globalTypes'

describe('BuiButton', () => {
  // @ts-ignore-next-line
  let wrapper: TestWrapper

  const createComponent = (props: {
    props: {
      disabled?: boolean
      color: ButtonColor
    }
  }) => {
    wrapper = shallowMount(BuiButton, {
      global: { stubs: { teleport: true } },
      ...props
    })
  }
  test('default button snapshot', async () => {
    createComponent({ props: { color: 'primary' } })
    const result = wrapper.html()
    await expect(result).toMatchFileSnapshot('./test/default.output.html')
  })
  test('default disabled button snapshot', async () => {
    createComponent({ props: { color: 'primary', disabled: true } })
    const result = wrapper.html()
    await expect(result).toMatchFileSnapshot('./test/default-disabled.output.html')
  })

  test('secondary button classes is correct', async () => {
    createComponent({ props: { color: 'secondary' } })

    const result = wrapper.html()
    await expect(result).toMatchFileSnapshot('./test/secondary.output.html')
  })

  test('secondary disabled button snapshot', async () => {
    createComponent({ props: { color: 'secondary', disabled: true } })
    const result = wrapper.html()
    await expect(result).toMatchFileSnapshot('./test/secondary-disabled.output.html')
  })

  test('text button classes is correct', async () => {
    createComponent({ props: { color: 'text' } })

    const result = wrapper.html()
    await expect(result).toMatchFileSnapshot('./test/text.output.html')
  })

  test('text button disabled snapshot', async () => {
    createComponent({ props: { color: 'text' } })

    const result = wrapper.html()
    await expect(result).toMatchFileSnapshot('./test/text-disabled.output.html')
  })
})
