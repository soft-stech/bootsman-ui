<script setup lang="ts">
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import { onMounted } from 'vue'
import InfoIcon from '@/components/CommonElements/InfoIcon.vue'
import { nanoid } from 'nanoid'

const props = defineProps<{ content: string; variant: 'info' | 'id' | 'slot'; id?: string }>()
const componentId = nanoid()

onMounted(() => {
  const selector = props.variant === 'id' && props.id ? `#${props.id}` : `#${componentId}`

  tippy(selector, {
    trigger: 'click',
    interactive: true,
    allowHTML: true,
    arrow: false,
    placement: 'right-end',
    theme: 'bui-tippy',
    content: props.content
  })
})
</script>

<template>
  <div class="relative">
    <div
      v-if="variant === 'info' || (variant === 'id' && !id)"
      class="w-fit relative text-primary-500 hover:text-primary-550 py-1 cursor-pointer"
      :id="componentId"
    >
      <InfoIcon />
    </div>
    <div v-if="variant === 'slot'" :id="componentId" class="cursor-pointer relative w-fit">
      <slot name="element" />
    </div>
  </div>
</template>

<style>
.tippy-box[data-theme~='bui-tippy'] {
  background-color: #7371f9;
  color: #f5f6f8;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  padding: 4px 8px;
  border-radius: 8px;
  box-shadow:
    0px 56px 24px 0px rgba(41, 40, 65, 0.08),
    0px 32px 24px 0px rgba(41, 40, 65, 0.08),
    0px 32px 24px 0px rgba(41, 40, 65, 0.08);
}
.tippy-box[data-theme~='bui-tippy'] .tippy-content {
  padding: 0;
}
</style>
