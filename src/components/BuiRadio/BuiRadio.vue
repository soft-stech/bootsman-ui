<script setup lang="ts">
import { twJoin, twMerge } from 'tailwind-merge'
import { computed } from 'vue'
import InactiveRadioIcon from '@/components/BuiRadio/svgComponents/InactiveRadioIcon.vue'
import ActiveRadioIcon from '@/components/BuiRadio/svgComponents/ActiveRadioIcon.vue'
import { nanoid } from 'nanoid'

interface IBuiRadioProps {
  disabled?: boolean | undefined
  groupName?: string
  optionValue: string
  value: string
}
const props = withDefaults(defineProps<IBuiRadioProps>(), {
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

const id = nanoid(10)

const disabledAttrValue = computed(() => {
  return Object.keys(props).includes('disabled') && props.disabled !== false ? true : undefined
})

const baseLabelClasses = 'font-semibold leading-6 text-sm hover:cursor-pointer'
const disabledLabelClasses = 'hover:!cursor-default text-gray-400'

const baseDescriptionClasses = 'font-normal leading-4 text-xs '
const disabledDescriptionClasses = 'text-gray-400'

const finalClasses = computed(() => {
  return {
    labelClasses: twMerge(baseLabelClasses, !!disabledAttrValue.value && disabledLabelClasses),
    descriptionClasses: twMerge(
      baseDescriptionClasses,
      !!disabledAttrValue.value && disabledDescriptionClasses
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
        type="radio"
        :name="props.groupName"
        :value="props.optionValue"
        class="peer hidden"
        :disabled="disabledAttrValue"
      />
      <label :for="id" class="hidden peer-checked:!block">
        <ActiveRadioIcon :disabled="disabledAttrValue" />
      </label>
      <label class="block peer-checked:!hidden" :for="id">
        <InactiveRadioIcon :disabled="disabledAttrValue" />
      </label>
    </div>
    <label class="flex-1 flex flex-col" :for="id">
      <div v-if="$slots.default" :class="finalClasses.labelClasses"><slot></slot></div>
      <div v-if="$slots.description" :class="finalClasses.descriptionClasses">
        <slot name="description"></slot>
      </div>
    </label>
  </div>
</template>
