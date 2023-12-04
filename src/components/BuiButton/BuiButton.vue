<script setup lang="ts">
import { twJoin, twMerge } from 'tailwind-merge'
import { computed } from 'vue'
import type { ButtonColor, ButtonSize } from './types.ts'

interface IBuiButtonProps {
  disabled?: boolean
  color?: ButtonColor
  size?: ButtonSize
  classes?: string
}
const props = withDefaults(defineProps<IBuiButtonProps>(), {
  disabled: false,
  color: 'primary',
  size: 'md',
  classes: ''
})

const baseClasses = 'font-medium rounded text-sm focus:outline-none flex'

// Style Classes

const primaryButtonClasses = {
  base: 'bg-primary-500 dark:bg-primary-500 text-white',
  hover: 'hover:bg-primary-550 dark:hover:bg-primary-600',
  focus: 'dark:focus:ring-primary-400 focus:bg-primary-575',
  disabled:
    'border-slate-300 hover:border-slate-300 bg-gray-150 dark:bg-primary-600 hover:bg-gray-150 text-gray-400 hover:text-gray-400 cursor-not-allowed'
}
const secondaryButtonClasses = {
  base: 'bg-transparent text-primary-550',
  hover: 'hover:bg-primary-150 dark:hover:bg-primary-650',
  focus: 'dark:focus:ring-primary-300 focus:bg-primary-175',
  disabled: 'text-primary-250 hover:bg-white cursor-not-allowed'
}
const textButtonClasses = {
  base: 'text-primary-500 dark:text-primary-225 bg-transparent',
  hover: 'dark:hover:text-primary-400',
  focus: '',
  disabled:
    'text-primary-250 dark:text-primary-175 dark:hover:text-primary-175 bg-white hover:bg-white dark:bg-transparent cursor-not-allowed'
}
const outlineButtonClasses = {
  base: 'text-primary-500 bg-transparent border border-primary-500 dark:border:primary-400 dark:text-primary-400',
  hover: 'hover:bg-primary-150 dark:hover:text-primary-500 dark:hover:bg-primary-650',
  focus: 'focus:bg-primary-175 dark:focus:bg-primary-625',
  disabled:
    'text-primary-250 border-primary-250 bg-primary-100 dark:bg-transparent hover:bg-primary-100 cursor-not-allowed dark:border-primary-590 dark:text-primary-590 dark:hover:text-primary-590'
}
const iconButtonClasses = {
  base: 'bg-primary-150 dark:bg-primary-650',
  hover: 'hover:bg-primary-150 dark:hover:bg-primary-650',
  focus: 'dark:focus:ring-primary-300 focus:bg-primary-175',
  disabled: 'text-primary-250 cursor-not-allowed'
}
const colorClasses = computed((): Record<ButtonColor, string> => {
  return {
    primary: twJoin(
      primaryButtonClasses.base,
      primaryButtonClasses.hover,
      primaryButtonClasses.focus,
      props.disabled && primaryButtonClasses.disabled
    ),
    secondary: twJoin(
      secondaryButtonClasses.base,
      secondaryButtonClasses.hover,
      secondaryButtonClasses.focus,
      props.disabled && secondaryButtonClasses.disabled
    ),
    text: twJoin(
      textButtonClasses.base,
      textButtonClasses.hover,
      textButtonClasses.focus,
      props.disabled && textButtonClasses.disabled
    ),
    outline: twJoin(
      outlineButtonClasses.base,
      outlineButtonClasses.hover,
      outlineButtonClasses.focus,
      props.disabled && outlineButtonClasses.disabled
    ),
    icon: twJoin(
      iconButtonClasses.base,
      iconButtonClasses.focus,
      iconButtonClasses.hover,
      props.disabled && iconButtonClasses.disabled
    )
  }
})
const sizeClasses: Record<ButtonSize, string> = {
  lg: 'py-2 px-5',
  md: 'py-1 px-4',
  sm: 'py-0.5 px-4'
}

const buttonClasses = computed(() => {
  return twMerge(
    baseClasses,
    colorClasses.value[props.color],
    sizeClasses[props.size],
    props.classes
  )
})
const emit = defineEmits(['click'])
</script>

<template>
  <button v-bind="$attrs" :class="buttonClasses" :disabled="disabled" @click="emit('click')">
    <slot name="prefix"></slot>
    <slot name="default">Primary</slot>
    <slot name="suffix"></slot>
  </button>
</template>
