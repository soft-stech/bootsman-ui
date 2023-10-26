<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue-demi'
import { ButtonColor } from './types.ts'

const baseClasses =
  'focus:ring-4 focus:ring-primary-200 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none'

const colorClasses: Record<ButtonColor, string> = {
  primary:
    'bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-400 text-white',
  secondary:
    'bg-primary-150 hover:bg-primary-200 dark:bg-primary-650 dark:hover:bg-primary-700 dark:focus:ring-primary-300 text-primary-500',
  link: 'text-primary-500 bg-transparent hover:bg-primary-100 dark:hover:bg-primary-650 dark:hover:text-primary-400'
}

interface IBuiButtonProps {
  color: ButtonColor
}
const props = withDefaults(defineProps<IBuiButtonProps>(), {
  color: 'primary'
})
const buttonClasses = computed(() => {
  return twMerge(baseClasses, colorClasses[props.color])
})
</script>

<template>
  <button :class="buttonClasses">
    <slot>Primary</slot>
  </button>
</template>
