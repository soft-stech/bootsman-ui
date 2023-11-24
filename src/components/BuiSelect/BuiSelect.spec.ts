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
      ...props
    })
  }
  test('select event fired', async () => {
    createComponent({ propsData: { options: options } })
    const input = wrapper.find('select')
    await input.setValue('1')

    expect(wrapper.emitted('input')[0][0]).toBe('1')
  })

  test('disabled select', async () => {
    createComponent({ propsData: { options: options, disabled: true } })
    const input = wrapper.find('select')
    await input.setValue('1')

    expect(wrapper.emitted('input')).toBeFalsy()
  })

  test('correct placeholder text', async () => {
    const placeholderText = 'My placeholder'
    createComponent({ propsData: { options: options, placeholder: placeholderText } })
    const input = wrapper.find('select')
    const optionList = input.findAll('option')

    expect(optionList.wrappers[0].text()).toBe(placeholderText)
  })
})
