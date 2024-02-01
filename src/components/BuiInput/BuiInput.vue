<template>
  <div class="flex flex-col justify-center gap-1">
    <label v-if="label" :class="labelClasses">
      {{ label }}
      <BuiTooltip
        v-if="infoTooltip"
        :event="infoTooltipEvent"
        variant="info"
        :content="infoTooltip"
      />
      <RequiredIcon v-if="required && !disabled" />
    </label>
    <div class="flex relative">
      <div
        v-if="$slots.prefix"
        class="w-10 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none overflow-hidden"
      >
        <slot name="prefix" />
      </div>
      <input
        v-bind="$attrs"
        v-model="model"
        :disabled="disabled"
        :required="required"
        :class="[inputClasses, $slots.prefix ? 'pl-10' : '']"
        @focusin="handleFocus"
        @blur="handleBlur"
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
import { computed, ref, watch } from 'vue'
import { twMerge } from 'tailwind-merge'
import RequiredIcon from '../CommonElements/RequiredIcon.vue'
import BuiTooltip from '../BuiTooltip/BuiTooltip.vue'

type ValidationStatus = 'success' | 'error'
interface InputProps {
  disabled?: boolean
  label?: string
  value?: string | number
  required?: boolean
  validationStatus?: ValidationStatus | null
  placeholder?: string | undefined
  hasForcedValidation?: boolean
  infoTooltip?: string
  infoTooltipEvent?: 'hover' | 'click'
}

const props = withDefaults(defineProps<InputProps>(), {
  disabled: false,
  label: '',
  value: '',
  required: false,
  validationStatus: null,
  placeholder: '',
  infoTooltipEvent: 'hover'
})
const emit = defineEmits(['focus', 'blur', 'input'])

const model = computed({
  get() {
    return props.value
  },
  set(event) {
    emit('input', event)
  }
})

const isDirty = ref(false)
const isInFocus = ref(false)
function handleBlur() {
  isInFocus.value = false
  isDirty.value = true
  emit('blur')
}

function handleFocus() {
  isInFocus.value = true
  emit('focus')
}

watch(model, (newValue, oldValue) => {
  if (newValue !== oldValue && !isDirty.value && !isInFocus.value) {
    isDirty.value = true
  }
})

const inputClasses = computed(() =>
  twMerge(
    'py-2 px-3 border border-slate-300 dark:border-gray-500 dark:focus:border-primary-500 focus:border-primary-500 bg-transparent rounded-lg focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-550 outline-none w-full dark:text-gray-100 text-clay-500 placeholder-gray-500',
    props.validationStatus === 'success' &&
      'border-green-300 dark:border-green-300 dark:focus:border-green-300 dark:focus:ring-green-300/[.16] focus:border-green-300 focus:ring-green-300/[.16]',
    props.validationStatus === 'error' &&
      (!!props.hasForcedValidation || isDirty.value) &&
      'border-red-300 dark:border-red-300 dark:focus:border-red-300 focus:border-red-300 focus:ring-red-300/[.16] dark:focus:ring-red-300/[.16]',
    props.disabled &&
      'bg-gray-150 placeholer:text-gray-300 dark:bg-white/[.16] dark:placeholder:text-white/[.16] cursor-not-allowed'
  )
)

const labelClasses =
  'flex flex-row gap-2 text-sm text-clay-500 font-semibold leading-6 dark:text-gray-100'
const validationWrapperClasses = computed(() =>
  twMerge(
    'text-sm font-normal',
    props.validationStatus === 'success' ? 'text-green-300' : '',
    props.validationStatus === 'error' && (!!props.hasForcedValidation || isDirty.value)
      ? 'text-red-300'
      : '',
    (props.validationStatus === null || (!props.hasForcedValidation && !isDirty.value)) && 'hidden'
  )
)
</script>
