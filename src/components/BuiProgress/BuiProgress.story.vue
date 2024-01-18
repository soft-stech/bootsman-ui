<script setup lang="ts">
import BuiProgress from './BuiProgress.vue'
import BuiButton from '../BuiButton/BuiButton.vue'
import { ref } from 'vue'

const model = ref(1)
</script>

<template>
  <Story title="BuiProgress" autoPropsDisabled :layout="{ type: 'grid', width: '400px' }">
    <Variant title="Default">
      <div class="p-2">
        <BuiProgress :value="60" label="Task progress" />
      </div>
    </Variant>
    <Variant title="Full">
      <div class="p-2">
        <BuiProgress :value="100" label="Task progress" />
      </div>
    </Variant>
    <Variant title="Zero">
      <div class="p-2">
        <BuiProgress :value="0" label="Task progress" />
      </div>
    </Variant>
    <Variant title="Custom">
      <div class="p-2">
        <BuiProgress :min-value="1" :value="3" :max-value="5" suffix="" label="1-5 scale" />
      </div>
    </Variant>
    <Variant title="No value">
      <div class="p-2">
        <BuiProgress :is-value-shown="false" :value="40" label="Task progress" />
      </div>
    </Variant>
    <Variant title="Dynamic">
      <div class="p-2">
        <BuiProgress :value="model" label="Task progress" />
        <div class="flex gap-8 mt-8">
          <BuiButton @click="model -= 10">-10</BuiButton>
          <BuiButton @click="model += 10">+10</BuiButton>
        </div>
      </div>
    </Variant>
  </Story>
</template>
