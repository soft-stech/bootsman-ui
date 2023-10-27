import { shallowMount } from '@vue/test-utils'
import BuiSelect from './BuiSelect.vue'
import { describe, expect, test } from 'vitest'
import type { TestWrapper } from '../../types/globalTypes'

const options = [
  {
    name: 'One',
    value: '1'
  },
  {
    name: 'Two',
    value: '2'
  }
]
describe('BuiSelect', () => {
  // @ts-ignore
  let wrapper: TestWrapper

  const createComponent = (props: any) => {
    wrapper = shallowMount(BuiSelect, {
      global: { stubs: { teleport: true } },
      ...props
    })
  }
  test('select event fired', async () => {
    createComponent({ props: { options: options } })
    const input = wrapper.find('select')
    await input.setValue('1')

    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('1')
  })

  test('disabled select', async () => {
    createComponent({ props: { options: options, disabled: true } })
    const input = wrapper.find('select')
    await input.setValue('1')

    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  test('correct placeholder text', async () => {
    const placeholderText = 'My placeholder'
    createComponent({ props: { options: options, placeholder: placeholderText } })
    const input = wrapper.find('select')
    const optionList = input.findAll('option')

    expect(optionList[0].text()).toBe(placeholderText)
  })
})
