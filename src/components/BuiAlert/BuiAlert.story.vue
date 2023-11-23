<script setup lang="ts">
import { reactive } from 'vue'
import BuiAlert from './BuiAlert.vue'

const state = reactive({
  icon: true,
  type: 'error',
  message: 'Node pools must have unique name prefixes'
})
</script>

<template>
  <Story title="BuiAlert" autoPropsDisabled :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default">
      <div class="p-2">
        <BuiAlert :icon="state.icon" :type="state.type">
          {{ state.message }}
        </BuiAlert>
      </div>
      <template #controls>
        <HstCheckbox v-model="state.icon" title="Icon" />
        <HstText v-model="state.message" title="Text" />
      </template>
    </Variant>
  </Story>
</template>
