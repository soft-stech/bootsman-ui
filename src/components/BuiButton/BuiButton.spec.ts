import { shallowMount } from '@vue/test-utils'
import BuiButton from './BuiButton.vue'
import { describe, expect, test } from 'vitest'
import { ButtonColor } from './types'
import type { TestWrapper } from '../../types/globalTypes'

describe('BuiButton', () => {
  // @ts-ignore
  let wrapper: TestWrapper

  const createComponent = (props: {
    props: {
      color: ButtonColor
    }
  }) => {
    wrapper = shallowMount(BuiButton, {
      global: { stubs: { teleport: true } },
      ...props
    })
  }
  test('default button classes is correct', () => {
    createComponent({ props: { color: 'primary' } })

    expect(wrapper.classes().join(' ')).toEqual(
      'focus:ring-4 focus:ring-primary-200 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-400 text-white'
    )
  })
  test('secondary button classes is correct', () => {
    createComponent({ props: { color: 'secondary' } })

    expect(wrapper.classes().join(' ')).toEqual(
      'focus:ring-4 focus:ring-primary-200 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none bg-primary-150 hover:bg-primary-200 dark:bg-primary-650 dark:hover:bg-primary-700 dark:focus:ring-primary-300 text-primary-500'
    )
  })
  test('text button classes is correct', () => {
    createComponent({ props: { color: 'link' } })

    expect(wrapper.classes().join(' ')).toEqual(
      'focus:ring-4 focus:ring-primary-200 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none text-primary-500 bg-transparent hover:bg-primary-100 dark:hover:bg-primary-650 dark:hover:text-primary-400'
    )
  })
})
