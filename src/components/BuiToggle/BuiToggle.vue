<script setup lang="ts">
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'

interface ToggleProps {
  disabled?: boolean
  label?: string
  value?: boolean
}

const props = withDefaults(defineProps<ToggleProps>(), {
  disabled: false,
  label: '',
  value: false
})

const emit = defineEmits(['input'])

const labelClasses = 'flex font-semibold text-sm mr-2'
const wrapperClasses = computed(() =>
  twMerge(
    'relative inline-flex items-center cursor-pointer justify-center',
    props.disabled && 'cursor-default'
  )
)
const toggleClasses = computed(() =>
  twMerge(
    'inline-flex shrink-0 items-center rounded-[10px] bg-white dark:hover:bg-primary-500/[.32] dark:bg-primary-500/[.16] dark:border-primary-500 hover:bg-gray-150 disabled:bg-gray-250 border border-gray-300 w-11 h-5 relative px-[5px]',
    props.value &&
      'bg-primary-500 border-primary-500 dark:bg-primary-500 dark:hover:bg-primary-550 dark:hover:border-primary-550 hover:bg-primary-550',
    props.disabled &&
      'bg-slate-300/[.16] border-slate-300/[.16] hover:bg-slate-300/[.16] hover:border-slate-300/[.16] dark:bg-white/10 dark:border-white/[.16] dark:hover:bg-white/[.16] dark:hover:border-white/[.16] cursor-not-allowed',
    props.disabled &&
      props.value &&
      'bg-primary-500/[.32] border-transparent hover:bg-primary-500/[.32] hover:border-transparent dark:bg-primary-500/[.32] dark:border-primary-500/[.32] dark:hover:bg-primary-500/[.32] dark:hover:border-primary-500/[.32]'
  )
)
const toggleBallClasses = computed(() =>
  twMerge(
    'inline-block w-3 h-3 rounded-full bg-gray-350 dark:bg-white transition-all duration-300',
    props.value && 'bg-white translate-x-[21px]',
    props.disabled && 'dark:bg-white/[.32] bg-slate-400',
    props.disabled && props.value && 'bg-white dark:bg-white/[.32]'
  )
)

function toggle() {
  if (!props.disabled) {
    emit('input', !props.value)
  }
}
</script>

<template>
  <button :class="wrapperClasses" @click="toggle">
    <span :class="labelClasses">{{ label }}</span>
    <span :class="toggleClasses">
      <span :class="toggleBallClasses"></span>
    </span>
  </button>
</template>
