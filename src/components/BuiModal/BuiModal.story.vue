<script setup lang="ts">
import BuiModal from '@/components/BuiModal/BuiModal.vue'
import { reactive, ref } from 'vue'
import { logEvent } from 'histoire/client'
import BuiButton from '../BuiButton/BuiButton.vue'

const state = reactive({
  message: 'My content of the modal'
})
const isShowModal = ref(false)
function toggleModal() {
  isShowModal.value = !isShowModal.value
}
</script>

<template>
  <Story title="BuiModal" autoPropsDisabled>
    <Variant title="Default" responsive-disabled>
      <div class="p-2">
        <div class="w-full h-20 bg-gray-300 mb-4 rounded flex justify-center items-center">
          <BuiButton @click="toggleModal">Show Modal</BuiButton>
        </div>
        <div class="w-full h-40 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-30 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-60 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-20 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-40 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-30 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-30 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-30 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-30 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-40 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-30 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-40 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-30 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-40 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-30 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-40 bg-gray-300 mb-4 rounded"></div>
        <div class="w-full h-30 bg-gray-300 mb-4 rounded"></div>
        <BuiModal
          v-if="isShowModal"
          class="w-full h-full"
          @close="toggleModal"
          @click:outside="toggleModal"
        >
          {{ state.message }}
        </BuiModal>
      </div>
      <template #controls>
        <HstText v-model="state.message" title="Text" />
      </template>
    </Variant>
  </Story>
</template>

<style scoped></style>
