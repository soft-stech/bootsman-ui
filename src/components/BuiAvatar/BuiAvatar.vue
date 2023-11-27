<script setup lang="ts">
import { ref } from 'vue'
const imageError = ref(false)

function setImageError() {
  imageError.value = true
}

defineProps({
  alt: {
    type: String,
    default: 'Avatar'
  },
  img: {
    type: String,
    default: ''
  }
})

const avatarClasses = 'w-8 h-8 rounded-full border border-white dark:border-primary-590'
const avatarPlaceholderWrapperClasses =
  'inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-gray-600 w-8 h-8 rounded-full'
const avatarPlaceholderClasses = 'absolute w-auto h-auto text-gray-400'
</script>

<template>
  <div class="relative box-border">
    <img
      v-if="img && !imageError"
      :alt="alt"
      :src="img"
      @error="setImageError"
      :class="avatarClasses"
    />
    <div v-else :class="avatarPlaceholderWrapperClasses">
      <svg
        :class="avatarPlaceholderClasses"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          fill-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>
