<script setup lang="ts">
import BuiSelect from './BuiSelect.vue'
import { ref } from 'vue-demi'

const model = ref(null)
const options = [
  {
    name: 'One',
    value: '1'
  },
  {
    name: 'Two',
    value: '2'
  }
]
</script>

<template>
  <Story title="BuiSelect" autoPropsDisabled :layout="{ type: 'grid', width: '400px' }">
    <Variant title="Default">
      <div class="p-2">
        <BuiSelect label="Default" v-model="model" :options="options" />
      </div>
    </Variant>
    <Variant title="Disabled">
      <div class="p-2">
        <BuiSelect label="Default" v-model="model" :options="options" disabled />
      </div>
    </Variant>
  </Story>
</template>
