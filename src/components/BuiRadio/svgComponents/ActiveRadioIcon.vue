<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="2" width="12" height="12" rx="6" stroke-width="4" :class="rectClasses" />
    />
  </svg>
</template>
<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
const props = withDefaults(defineProps<{ disabled: boolean; readonly: boolean }>(), {
  disabled: false,
  readonly: false
})

const rectClasses = twMerge(
  'cursor-pointer stroke-primary-500 group-hover:stroke-primary-550  fill-white group-hover:fill-slate-150',
  props.disabled &&
    'cursor-not-allowed group-hover:stroke-primary-500 group-hover:fill-transparent opacity-[0.32] fill-transparent',
  props.readonly && 'cursor-default group-hover:stroke-primary-500 group-hover:fill-white'
)
</script>
