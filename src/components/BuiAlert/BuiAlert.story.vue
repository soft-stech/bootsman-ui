<script setup lang="ts">
import BuiAlert from './BuiAlert.vue'
</script>

<template>
  <Story title="BuiAlert" autoPropsDisabled :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default">
      <div class="p-2">
        <BuiAlert>Node pools must have unique name prefixes</BuiAlert>
      </div>
    </Variant>
  </Story>
</template>
