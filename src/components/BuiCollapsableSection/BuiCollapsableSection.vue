<script setup lang="ts">
import { ref } from 'vue'
import ArrowButton from '@/components/BuiCollapsableSection/svgComponents/ArrowButton.vue'

const props = withDefaults(
  defineProps<{
    title: string
    description?: string
    isInitiallyOpen?: boolean
  }>(),
  { isInitiallyOpen: true }
)

const isUncollapsed = ref(props.isInitiallyOpen)
function toggleCollapsingState() {
  isUncollapsed.value = !isUncollapsed.value
}
</script>

<template>
  <section class="w-full min-w-full rounded-tl border border-primary-500/[.32]">
    <div
      @click="toggleCollapsingState"
      class="w-full min-w-full flex px-2 py-4 rounded-tl dark:bg-white/[.04] bg-primary-800/[.04]"
    >
      <div class="py-1 px-2">
        <ArrowButton :class="isUncollapsed ? '' : 'rotate-180'" />
      </div>
      <div class="flex flex-1 flex-col">
        <div
          class="text-base font-semibold leading-6 align-middle text-clay-500 dark:text-gray-100"
        >
          {{ title }}
        </div>
        <div class="text-xs font-normal leading-4 align-middle text-clay-500 dark:text-gray-100">
          {{ description }}
        </div>
      </div>
    </div>
    <article v-show="isUncollapsed" class="border-t border-t-primary-500/[.16]"><slot /></article>
  </section>
</template>
