<script setup lang="ts">
import BuiToggle from '@/components/BuiToggle/BuiToggle.vue'
import { ref } from 'vue'
const toggle = ref(false)
</script>

<template>
  <Story title="BuiToggle" autoPropsDisabled :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default">
      <div class="p-2">
        <BuiToggle v-model="toggle" />
      </div>
      <template #controls>
        <HstCheckbox v-model="toggle" title="Checked" />
      </template>
    </Variant>
    <Variant title="Disabled">
      <div class="p-2">
        <BuiToggle v-model="toggle" disabled />
      </div>
      <template #controls>
        <HstCheckbox v-model="toggle" title="Checked" />
      </template>
    </Variant>
    <Variant title="With Label">
      <div class="p-2">
        <BuiToggle label="My label" v-model="toggle" />
      </div>
      <template #controls>
        <HstCheckbox v-model="toggle" title="Checked" />
      </template>
    </Variant>
    <Variant title="Disabled with label">
      <div class="p-2">
        <BuiToggle label="My label" v-model="toggle" disabled />
      </div>
      <template #controls>
        <HstCheckbox v-model="toggle" title="Checked" />
      </template>
    </Variant>
  </Story>
</template>
