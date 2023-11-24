<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="0.5" y="0.5" width="15" height="15" rx="1.5" :class="rectClasses" />
  </svg>
</template>

<style scoped>
.bui-checkbox:not(.disabled) {
  fill-opacity: 0.16;
  stroke-opacity: 1;
}
.group:hover .bui-checkbox {
  fill-opacity: 1;
  stroke-opacity: 1;
}
.dark .group:hover .bui-checkbox {
  fill-opacity: 0.32;
  stroke-opacity: 1;
}

.dark .bui-checkbox.disabled {
  fill-opacity: 0.16 !important;
  stroke-opacity: 0.16 !important;
}
</style>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const props = withDefaults(defineProps<{ disabled: boolean }>(), {
  disabled: false
})

const rectClasses = twMerge(
  'bui-checkbox',
  'dark:stroke-primary-500 dark:fill-primary-500  dark:group-hover:fill-primary-500 dark:group-hover:[.bui-checkbox-hover]',
  'cursor-pointer stroke-gray-300 fill-white group-hover:fill-gray-150',
  props.disabled &&
    'disabled cursor-default dark:fill-white dark:stroke-white dark:group-hover:fill-white fill-slate-200 group-hover:fill-slate-200'
)
</script>
