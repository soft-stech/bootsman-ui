<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

interface ModalProps {
  notEscapable?: boolean
  persistent?: boolean
}

const props = withDefaults(defineProps<ModalProps>(), {
  notEscapable: false,
  persistent: false
})
const emit = defineEmits(['close', 'click:outside'])
function clickOutside() {
  if (!props.persistent) {
    emit('click:outside')
  }
}
function closeWithEsc() {
  if (!props.notEscapable) {
    emit('close')
  }
}
function disableBodyScroll() {
  document.body.style.overflow = 'hidden'
}
function enableBodyScroll() {
  document.body.style.overflow = 'auto'
}
onMounted(() => disableBodyScroll())
onBeforeUnmount(() => enableBodyScroll())
</script>

<template>
  <div class="flex items-center justify-center fixed left-0 top-0 w-screen h-screen z-50">
    <div
      class="bg-primary-610 bg-opacity-50 dark:bg-opacity-80 absolute left-0 top-0 z-40 w-screen h-screen"
      @click.self="clickOutside"
    />
    <div
      ref="modalRef"
      class="shadow-my min-w-30 min-h-30 overflow-y-auto w-max h-max overflow-x-hidden z-50 md:inset-0 justify-center items-center flex p-8 bg-white dark:bg-primary-800 rounded-lg"
      tabindex="0"
      @keyup.esc="closeWithEsc"
    >
      <slot :close="closeWithEsc"> Modal content </slot>
    </div>
  </div>
</template>
