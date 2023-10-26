import { shallowMount } from '@vue/test-utils'
import BuiInput from './BuiInput.vue'
import { describe, expect, test } from 'vitest'
import type { TestWrapper } from '../../types/globalTypes'

describe('BuiInput', () => {
  // @ts-ignore
  let wrapper: TestWrapper

  const createComponent = (props: any) => {
    wrapper = shallowMount(BuiInput, {
      global: { stubs: { teleport: true } },
      ...props
    })
  }
  test('input event fired', async () => {
    createComponent({ props: { color: 'primary' } })
    const input = wrapper.find('input')

    await input.setValue('some-text')

    expect(input.element.value).toBe('some-text')
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('some-text')
  })

  test('focus event fired', async () => {
    createComponent({ props: { color: 'primary' } })
    const input = wrapper.find('input')

    await input.trigger('focus')

    expect(wrapper.emitted()).toHaveProperty('focus')
  })

  test('blur event fired', async () => {
    createComponent({ props: { color: 'primary' } })
    const input = wrapper.find('input')

    await input.trigger('blur')

    expect(wrapper.emitted()).toHaveProperty('blur')
  })
})
