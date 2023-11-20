<template>
  <div class="flex flex-col justify-center gap-1">
    <label v-if="label" :class="labelClasses">{{ label }}</label>
    <div class="flex relative">
      <div
        v-if="$slots.prefix"
        class="w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden"
      >
        <slot name="prefix" />
      </div>
      <input
        v-model="model"
        :disabled="disabled"
        :required="required"
        :class="[inputClasses, $slots.prefix ? 'pl-10' : '']"
        @focusin="emit('focus')"
        @blur="emit('blur')"
        :placeholder="placeholder"
      />
      <div v-if="$slots.suffix" class="absolute right-2.5 bottom-2.5">
        <slot name="suffix" />
      </div>
    </div>
    <div v-if="$slots.validationMessage" :class="validationWrapperClasses">
      <slot name="validationMessage" />
    </div>
    <div v-if="$slots.helper" class="text-sm font-normal text-gray-500 dark:text-gray-400">
      <slot name="helper" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'
import { twMerge } from 'tailwind-merge'

type ValidationStatus = 'success' | 'error'
interface InputProps {
  disabled?: boolean
  label?: string
  modelValue?: string
  required?: boolean
  validationStatus?: ValidationStatus | null
  placeholder?: string | undefined
}

const props = withDefaults(defineProps<InputProps>(), {
  disabled: false,
  label: '',
  modelValue: '',
  required: false,
  validationStatus: null,
  placeholder: ''
})
const emit = defineEmits(['focus', 'blur', 'update:modelValue'])

const model = useVModel(props, 'modelValue')

const inputClasses = twMerge(
  'py-2 px-3 border border-slate-300 dark:border-gray-500 dark:focus:border-primary-500 focus:border-primary-500 bg-transparent rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-550 outline-none w-full dark:text-gray-100 text-clay-500 placeholder-gray-500',
  props.validationStatus === 'success' &&
    'border-green-300 focus:border-green-300 focus:ring-green-200',
  props.validationStatus === 'error' && 'border-red-300 focus:border-red-300 focus:ring-red-200'
)

const labelClasses = 'text-sm text-clay-500 font-semibold leading-6 dark:text-gray-100'
const validationWrapperClasses = computed(() =>
  twMerge(
    'text-sm font-normal',
    props.validationStatus === 'success' ? 'text-green-300' : '',
    props.validationStatus === 'error' ? 'text-red-300' : ''
  )
)
</script>
