<template>
  <label class="relative">
    <span v-if="label" :class="labelClasses">
      {{ label }}
      <RequiredIcon v-if="required && !disabled" />
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
    <div v-if="$slots.validationMessage" :class="validationWrapperClasses">
      <slot name="validationMessage" />
    </div>
  </label>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { twMerge } from 'tailwind-merge'
import RequiredIcon from '@/components/CommonElements/RequiredIcon.vue'

type ValidationStatus = 'success' | 'error'
type OptionsType = {
  name: string
  value: unknown
}
interface InputProps {
  value?: unknown
  label?: string
  options?: OptionsType[]
  placeholder?: string
  disabled?: boolean
  required?: boolean
  hasForcedValidation?: boolean
  validationStatus?: ValidationStatus | null
}
const props = withDefaults(defineProps<InputProps>(), {
  value: '',
  label: '',
  options: () => [],
  placeholder: 'Please select one',
  disabled: false,
  required: false,
  hasForcedValidation: false,
  validationStatus: null
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

const isDirty = ref(false)
watch(model, (newValue, oldValue) => {
  if (newValue !== oldValue && !isDirty.value) {
    isDirty.value = true
  }
})

const defaultLabelClasses =
  'flex flex-row gap-2 mb-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white'
const defaultSelectClasses =
  'px-3 py-2 border border-slate-300 dark:border-gray-500 dark:focus:border-primary-500 focus:border-primary-500 bg-transparent rounded-lg focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-550 outline-none w-full dark:text-gray-100 text-clay-500 placeholder-gray-500 w-full appearance-none pr-8'
const disabledSelectClasses =
  'cursor-not-allowed bg-gray-200 dark:bg-clay-500 dark:text-white/[.32]'
const selectIconClasses = computed(() =>
  twMerge(
    'absolute right-2 bottom-2.5',
    props.disabled && 'bg-gray-200 text-gray-500 dark:bg-clay-500 dark:text-white/[.32]'
  )
)
const selectClasses = computed(() => {
  return twMerge(
    defaultSelectClasses,
    props.validationStatus === 'success' &&
      'border-green-300 focus:border-green-300 focus:ring-green-200',
    props.validationStatus === 'error' &&
      (!!props.hasForcedValidation || isDirty.value) &&
      'border-red-300 focus:border-red-300 focus:ring-red-200',
    props.disabled && disabledSelectClasses
  )
})

const validationWrapperClasses = computed(() =>
  twMerge(
    'text-sm font-normal mt-1',
    props.validationStatus === 'success' ? 'text-green-300' : '',
    props.validationStatus === 'error' && (!!props.hasForcedValidation || isDirty.value)
      ? 'text-red-300'
      : '',
    !props.hasForcedValidation && !isDirty.value && 'hidden'
  )
)

const labelClasses = computed(() => {
  return defaultLabelClasses
})
</script>
