<script setup lang="ts">
import { computed, ref } from 'vue'

import ArrowButton from '@/components/BuiAccordion/svgComponents/ArrowButton.vue'

const props = withDefaults(
  defineProps<{
    title: string
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    description?: string
    value?: boolean | undefined
  }>(),
  { value: undefined, tag: 'h2' }
)
const emit = defineEmits(['input'])
const hasModel = computed(() => props.value !== undefined)
const internalValue = ref(true)
const isUncollapsed = computed(() => (hasModel.value ? props.value : internalValue.value))

function toggleCollapsingState() {
  if (hasModel.value) {
    emit('input', !props.value)
  } else {
    internalValue.value = !internalValue.value
  }
}
</script>

<template>
  <section class="w-full min-w-full rounded-tl border border-primary-500/[.32]">
    <div
      class="w-full min-w-full flex px-2 py-4 rounded-tl dark:bg-white/[.04] bg-primary-800/[.04]"
    >
      <div class="py-1 px-2" @click="toggleCollapsingState">
        <div v-if="$slots.icon" :class="isUncollapsed ? '' : 'rotate-180'">
          <slot name="icon" />
        </div>
        <ArrowButton v-else :class="isUncollapsed ? '' : 'rotate-180'" />
      </div>
      <div class="flex flex-1 flex-col" @click="toggleCollapsingState">
        <component
          :is="props.tag"
          class="text-base font-semibold leading-6 align-middle text-clay-500 dark:text-gray-100"
        >
          {{ title }}
        </component>
        <div class="text-xs font-normal leading-4 align-middle text-clay-500 dark:text-gray-100">
          {{ description }}
        </div>
      </div>
      <div v-if="$slots.suffix">
        <slot name="suffix" />
      </div>
    </div>
    <article v-show="isUncollapsed" class="border-t border-t-primary-500/[.16]"><slot /></article>
  </section>
</template>
