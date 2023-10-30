<script setup lang="ts">
import BuiButton from './BuiButton.vue'
import { ButtonColor, ButtonSize } from './types'

const colorOptions: ButtonColor[] = ['primary', 'secondary', 'outline', 'text']
const sizes: {
  name: string
  value: ButtonSize
}[] = [
  {
    name: 'Large',
    value: 'lg'
  },
  {
    name: 'Medium',
    value: 'md'
  },
  {
    name: 'Small',
    value: 'sm'
  }
]
</script>

<template>
  <Story title="BuiButton" autoPropsDisabled :layout="{ type: 'grid', width: '25%' }">
    <Variant v-for="color in colorOptions" :title="color" :key="color">
      <div class="p-4 flex justify-center">
        <BuiButton :color="color">{{ color }}</BuiButton>
      </div>
    </Variant>
    <h2>Disabled</h2>
    <Variant v-for="color in colorOptions" :title="color" :key="color">
      <div class="p-4 flex justify-center">
        <BuiButton :color="color" disabled>{{ color }}</BuiButton>
      </div>
    </Variant>
    <h2>Sizes</h2>
    <Variant v-for="size in sizes" :title="size.name" :key="size">
      <div class="p-4 flex justify-center">
        <BuiButton :size="size.value">{{ size.name }}</BuiButton>
      </div>
    </Variant>
  </Story>
</template>

<docs lang="md">
# BuiButton

## Props:

### color

Values: `primary` | `secondary` | `text`

### size

Values: `lg` | `md` | `sm`
</docs>
