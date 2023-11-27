import { shallowMount } from '@vue/test-utils'
import BuiTag from './BuiTag.vue'
import { describe, expect, test } from 'vitest'

describe('BuiTag', () => {
  // @ts-ignore-next-line
  let wrapper: any

  const createComponent = (props?: {
    props: {
      dissmisable?: boolean
    }
  }) => {
    wrapper = shallowMount(BuiTag, {
      ...props
    })
  }
  test('default tag snapshot', async () => {
    createComponent()
    const result = wrapper.html()
    await expect(result).toMatchFileSnapshot('./test/default-tag.output.html')
  })

  test('dissmisable tag snapshot', async () => {
    createComponent({
      props: {
        dissmisable: true
      }
    })
    const result = wrapper.html()
    await expect(result).toMatchFileSnapshot('./test/dissmisable-tag.output.html')
  })
})
