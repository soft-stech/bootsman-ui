<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    :class="svgClasses"
  >
    <rect width="16" height="16" rx="2" :class="rectClasses" />
    <path
      d="M13 6L11.9489 5L6.73797 9.99291L4.05107 7.41844L3 8.41844L5.6943 10.9929H5.6869L6.73797 12L7.78905 10.9929H7.78164L13 6Z"
      fill="white"
    />
  </svg>
</template>
<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
const props = withDefaults(defineProps<{ disabled: boolean }>(), {
  disabled: false
})

const svgClasses = twMerge('cursor-pointer', props.disabled && 'opacity-[0.32] cursor-default')

const rectClasses = twMerge(
  'fill-primary-500 group-hover:fill-primary-550',
  props.disabled && 'group-hover:fill-primary-500'
)
</script>
