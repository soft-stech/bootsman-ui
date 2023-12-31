import { shallowMount } from '@vue/test-utils'
import BuiInput from './BuiInput.vue'
import { describe, expect, test } from 'vitest'
import type { TestWrapper } from '../../types/globalTypes'

describe('BuiInput', () => {
  // @ts-ignore-next-line
  let wrapper: TestWrapper

  const createComponent = (props?: any) => {
    wrapper = shallowMount(BuiInput, {
      ...props
    })
  }
  test('input event fired', async () => {
    createComponent()
    const input = wrapper.find('input')

    await input.setValue('some-text')

    expect(input.element.value).toBe('some-text')
    expect(wrapper.emitted('input')[0][0]).toBe('some-text')
  })

  test('focus event fired', async () => {
    createComponent({ attachToDocument: true })
    const input = wrapper.find('input')

    await input.trigger('focus')

    expect(wrapper.emitted()).toHaveProperty('focus')
  })

  test('blur event fired', async () => {
    createComponent()
    const input = wrapper.find('input')

    await input.trigger('blur')

    expect(wrapper.emitted()).toHaveProperty('blur')
  })

  test('default classes is correct', async () => {
    createComponent()
    const input = wrapper.find('input')
    expect(input.classes().join(' ')).toEqual(
      'py-2 px-3 border border-slate-300 dark:border-gray-500 dark:focus:border-primary-500 focus:border-primary-500 bg-transparent rounded-lg focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-550 outline-none w-full dark:text-gray-100 text-clay-500 placeholder-gray-500'
    )
  })

  test('error classes is correct', async () => {
    createComponent({ propsData: { validationStatus: 'error', hasForcedValidation: true } })
    const input = wrapper.find('input')
    expect(input.classes().join(' ')).toEqual(
      'py-2 px-3 border bg-transparent rounded-lg focus:ring-2 outline-none w-full dark:text-gray-100 text-clay-500 placeholder-gray-500 border-red-300 dark:border-red-300 dark:focus:border-red-300 focus:border-red-300 focus:ring-red-300/[.16] dark:focus:ring-red-300/[.16]'
    )
  })

  test('success classes is correct', async () => {
    createComponent({ propsData: { validationStatus: 'success', hasForcedValidation: true } })
    const input = wrapper.find('input')
    expect(input.classes().join(' ')).toEqual(
      'py-2 px-3 border bg-transparent rounded-lg focus:ring-2 outline-none w-full dark:text-gray-100 text-clay-500 placeholder-gray-500 border-green-300 dark:border-green-300 dark:focus:border-green-300 dark:focus:ring-green-300/[.16] focus:border-green-300 focus:ring-green-300/[.16]'
    )
  })

  test('hepler slot is rendered', async () => {
    createComponent({
      slots: {
        helper: 'Helper text'
      }
    })

    expect(wrapper.text()).toContain('Helper text')
  })

  test('validation message slot rendered', async () => {
    createComponent({
      slots: {
        validationMessage: 'Validation message'
      }
    })

    expect(wrapper.text()).toContain('Validation message')
  })
})
