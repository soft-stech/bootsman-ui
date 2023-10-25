import { VueWrapper } from '@vue/test-utils'
import { ComponentPublicInstance } from 'vue-demi'

export type TestWrapper<T> = VueWrapper<ComponentPublicInstance & T>
