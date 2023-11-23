<script setup lang="ts">
import BuiModal from '@/components/BuiModal/BuiModal.vue'
import { reactive } from 'vue'
import { logEvent } from 'histoire/client'

const state = reactive({
  message: 'My content of the modal'
})
</script>

<template>
  <Story title="BuiModal" autoPropsDisabled>
    <Variant title="Default" responsive-disabled>
      <div class="p-2">
        <BuiModal
          class="w-full h-full"
          @close="logEvent('close', $event)"
          @click:outside="logEvent('click:outside', $event)"
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
