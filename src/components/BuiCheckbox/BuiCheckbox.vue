<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'
import InactiveCheckboxIcon from '@/components/BuiCheckbox/svgComponents/InactiveCheckboxIcon.vue'
import ActiveCheckboxIcon from '@/components/BuiCheckbox/svgComponents/ActiveCheckboxIcon.vue'
import { nanoid } from 'nanoid'

interface IBuiRadioProps {
  disabled?: boolean | undefined
  groupName?: string
  optionName?: string
  value: boolean
  readonly?: boolean | undefined
}
const props = withDefaults(defineProps<IBuiRadioProps>(), {
  disabled: false,
  value: false
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

const id = nanoid(10)

const disabledAttrValue = computed(() => {
  return Object.keys(props).includes('disabled') && props.disabled !== false ? true : undefined
})
const readonlyAttrValue = computed(() => {
  return Object.keys(props).includes('readonly') && props.readonly !== false ? true : undefined
})

const idForLabel = readonlyAttrValue.value || disabledAttrValue.value ? undefined : id

const baseLabelClasses = 'font-semibold leading-6 text-sm'
const disabledLabelClasses = 'hover:cursor-not-allowed text-gray-400 cursor-not-allowed'

const baseDescriptionClasses = 'font-normal leading-4 text-xs'
const disabledDescriptionClasses = 'text-gray-400 cursor-not-allowed'

const finalClasses = computed(() => {
  return {
    labelClasses: twMerge(
      baseLabelClasses,
      !!disabledAttrValue.value && disabledLabelClasses,
      !readonlyAttrValue.value && !disabledAttrValue.value && 'cursor-pointer'
    ),
    descriptionClasses: twMerge(
      baseDescriptionClasses,
      !!disabledAttrValue.value && disabledDescriptionClasses,
      !readonlyAttrValue.value && !disabledAttrValue.value && 'cursor-pointer'
    )
  }
})
</script>
<template>
  <div class="flex flex-row gap-2 group">
    <div class="pt-1">
      <input
        :id="id"
        v-model="model"
        type="checkbox"
        :name="props.groupName"
        :value="props.optionName"
        class="peer hidden"
        :disabled="disabledAttrValue"
      />
      <label :for="idForLabel" class="hidden peer-checked:!block">
        <ActiveCheckboxIcon :disabled="disabledAttrValue" :readonly="readonlyAttrValue" />
      </label>
      <label class="block peer-checked:!hidden" :for="idForLabel">
        <InactiveCheckboxIcon :disabled="disabledAttrValue" :readonly="readonlyAttrValue" />
      </label>
    </div>
    <label
      class="flex-1 flex flex-col"
      :for="idForLabel"
      v-if="$slots.default || $slots.description"
    >
      <div v-if="$slots.default" :class="finalClasses.labelClasses"><slot /></div>
      <div v-if="$slots.description" :class="finalClasses.descriptionClasses">
        <slot name="description" />
      </div>
    </label>
  </div>
</template>
