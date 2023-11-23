<script setup lang="ts">
import BuiAvatar from '@/components/BuiAvatar/BuiAvatar.vue'
import { reactive } from 'vue'

const state = reactive({
  image: 'https://dummyimage.com/300x300/000/fff'
})
</script>

<template>
  <Story title="BuiAvatar" autoPropsDisabled :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default">
      <div class="p-2">
        <BuiAvatar :img="state.image" />
      </div>
      <template #controls>
        <HstText v-model="state.image" title="Image" />
      </template>
    </Variant>
    <Variant title="Placeholder">
      <div class="p-2">
        <BuiAvatar />
      </div>
    </Variant>
  </Story>
</template>
