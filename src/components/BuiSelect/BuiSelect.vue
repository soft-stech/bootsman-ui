<template>
  <label class="relative">
    <span v-if="label" :class="labelClasses">
      {{ label }}
    </span>

    <span class="relative flex">
      <select v-model="model" :disabled="disabled" :class="selectClasses">
        <option disabled selected value="">
          {{ placeholder }}
        </option>
        <option v-for="(option, index) in options" :key="index" :value="option.value">
          {{ option.name }}
        </option>
      </select>
      <span :class="selectIconClasses">
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            fill="currentColor"
            d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
          />
        </svg>
      </span>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'

type OptionsType = {
  name: string
  value: any
}
interface InputProps {
  value?: string
  label?: string
  options?: OptionsType[]
  placeholder?: string
  disabled?: boolean
}
const props = withDefaults(defineProps<InputProps>(), {
  value: '',
  label: '',
  options: () => [],
  placeholder: 'Please select one',
  disabled: false
})
const emit = defineEmits(['input'])

const model = computed({
  get() {
    return props.value
  },
  set(event) {
    emit('input', event)
  }
})

const defaultLabelClasses =
  'block mb-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white'
const defaultSelectClasses =
  'px-3 py-2 border border-slate-300 dark:border-gray-500 dark:focus:border-primary-500 focus:border-primary-500 bg-transparent rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-550 outline-none w-full dark:text-gray-100 text-clay-500 placeholder-gray-500 w-full appearance-none pr-8'
const disabledSelectClasses =
  'cursor-not-allowed bg-gray-200 dark:bg-clay-500 dark:text-white/[.32]'
const selectIconClasses = twMerge(
  'absolute right-2 bottom-2.5',
  props.disabled && 'bg-gray-200 text-gray-500 dark:bg-clay-500 dark:text-white/[.32]'
)
const selectClasses = computed(() => {
  return twMerge(defaultSelectClasses, props.disabled && disabledSelectClasses)
})

const labelClasses = computed(() => {
  return defaultLabelClasses
})
</script>
