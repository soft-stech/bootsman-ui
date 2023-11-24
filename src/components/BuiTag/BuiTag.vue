<script setup lang="ts">
withDefaults(
  defineProps<{
    dissmisable?: boolean
  }>(),
  {
    dissmisable: false
  }
)

const emit = defineEmits<{ (e: 'close'): void }>()
</script>

<template>
  <span
    class="flex items-center py-1 px-2 rounded bg-primary-150 hover:bg-primary-175 w-max dark:bg-primary-650 dark:hover:bg-primary-575"
  >
    <slot name="default"> Tag </slot>
    <slot name="close-icon">
      <span
        class="text-clay-500 ml-1 cursor-pointer dark:text-white"
        v-if="dissmisable"
        @click="emit('close')"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 384 512">
          <path
            fill="currentColor"
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </span>
    </slot>
  </span>
</template>
