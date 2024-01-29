<script setup lang="ts">
import { computed } from 'vue'

interface ProgressBarProps {
  label?: string
  maxValue?: number
  minValue?: number
  suffix?: string
  value: number
  isValueShown?: boolean
}

const props = withDefaults(defineProps<ProgressBarProps>(), {
  label: 'Progress:',
  maxValue: 100,
  minValue: 0,
  suffix: '%',
  isValueShown: true
})

const scalePercent = computed(() => {
  if (
    typeof props.minValue !== 'number' ||
    typeof props.maxValue !== 'number' ||
    props.minValue < 0 ||
    props.minValue > props.maxValue ||
    props.maxValue < 0
  ) {
    return 0
  }
  if (props.value <= props.minValue) {
    return 0
  }
  if (props.value >= props.maxValue) {
    return 100
  }
  return Math.round(((props.value - props.minValue) * 100) / (props.maxValue - props.minValue))
})

const scaleWidthClass = computed(() => {
  return { width: scalePercent.value + '%', 'min-width': scalePercent.value + '%' }
})
</script>

<template>
  <div>
    <div class="flex text-base font-semibold leading-6 justify-center items-center mb-3">
      {{ label }}
    </div>
    <div
      v-if="isValueShown"
      class="flex justify-center items-center py-1 font-semibold leading-6 text-[14px]"
    >
      {{ `${value}${suffix}` }}
    </div>
    <div class="flex items-center max-w-full w-full h-[21px] min-h-[21px] relative">
      <div class="flex flex-row z-1 absolute left-0 top-0 w-full min-w-full h-[21px] max-h-[21px]">
        <div
          class="h-[21px] max-h-[21px] w-[6px] min-w-[6px] rounded-left-cap bg-primary-500/[.12]"
        ></div>
        <div class="w-full h-[21px] flex-1 relative bg-primary-500/[.12]"></div>
        <div class="h-[21px] w-[6px] max-w-[6px] rounded-right-cap bg-primary-500/[.12]"></div>
        <div
          class="h-[21px] w-[6px] max-w-[6px] ellips bg-primary-500/[.08] absolute right-0 top-0"
        ></div>
      </div>

      <div class="flex flex-row z-2" :style="scaleWidthClass">
        <div
          v-show="scalePercent > 0"
          class="h-[21px] w-[6px] max-w-[6px] rounded-left-cap bg-primary-500/[.6]"
        ></div>
        <div
          v-show="scalePercent > 0"
          class="h-[21px] flex-1 -mr-[3px] relative bg-primary-500/[.6]"
        ></div>
        <div class="h-[21px] w-[6px] max-w-[6px] ellips bg-primary-500"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ellips {
  border-radius: 100%;
}
.rounded-left-cap {
  border-radius: 100% 0 0 100%;
}

.rounded-right-cap {
  border-radius: 0 100% 100% 0;
}
</style>
