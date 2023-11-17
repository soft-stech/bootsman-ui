import { VueWrapper } from '@vue/test-utils'
import { ComponentPublicInstance } from 'vue'

export type TestWrapper<T> = VueWrapper<ComponentPublicInstance & T>
