<script setup lang="ts">
import BuiButton from './BuiButton.vue'
import { ButtonColor } from './types'

const colorOptions: ButtonColor[] = ['primary', 'secondary', 'link']
</script>

<template>
  <Story title="BuiButton" autoPropsDisabled :layout="{ type: 'grid', width: '200px' }">
    <Variant v-for="color in colorOptions" :title="color" :key="color">
      <div class="p-4">
        <BuiButton :color="color">{{ color }}</BuiButton>
      </div>
    </Variant>
  </Story>
</template>
