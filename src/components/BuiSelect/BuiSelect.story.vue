<script setup lang="ts">
import BuiSelect from './BuiSelect.vue'
import BuiInput from '../BuiInput/BuiInput.vue'
import { ref } from 'vue'

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
        <BuiSelect label="Default" v-model="model" :options="options" :required="true" />
      </div>
    </Variant>
    <Variant title="Disabled">
      <div class="p-2">
        <BuiSelect label="Default" :options="options" disabled />
      </div>
    </Variant>
    <Variant title="In one line with input">
      <div class="flex flex-row gap-2 p-2">
        <BuiSelect label="Default" v-model="model" :required="true" :options="options" />
        <BuiInput label="Default" :required="true" />
      </div>
    </Variant>
  </Story>
</template>
