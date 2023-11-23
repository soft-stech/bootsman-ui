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

const labelClasses = 'flex text-clay-500 font-semibold text-sm mr-2'
const wrapperClasses = 'relative inline-flex items-center cursor-pointer justify-center'
const toggleClasses = computed(() =>
  twMerge(
    'inline-flex shrink-0 items-center rounded-[10px] bg-white hover:bg-gray-150 disabled:bg-gray-250 border border-gray-300 w-11 h-5 relative px-[5px]',
    props.value && 'bg-primary-500 border-primary-500'
  )
)
const toggleBallClasses = computed(() =>
  twMerge(
    'inline-block w-3 h-3 rounded-full bg-gray-350 transition-all duration-300',
    props.value && 'bg-white translate-x-[21px]'
  )
)

function toggle() {
  emit('input', !props.value)
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
