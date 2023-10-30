<script setup lang="ts">
import BuiTag from './BuiTag.vue'
import { logEvent } from 'histoire/client'
</script>

<template>
  <Story title="BuiTag" autoPropsDisabled :layout="{ type: 'grid', width: '20%' }">
    <Variant title="Default">
      <div class="p-2">
        <BuiTag label="Default">Tag</BuiTag>
      </div>
    </Variant>
    <Variant title="Dissmisable">
      <div class="p-2">
        <BuiTag label="Default" dissmisable @close="logEvent('close', $event)">Tag</BuiTag>
      </div>
    </Variant>
  </Story>
</template>
