import type { Wrapper } from '@vue/test-utils'
import { ComponentPublicInstance } from 'vue'

export type TestWrapper<T> = Wrapper<ComponentPublicInstance & T>
