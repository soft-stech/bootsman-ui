<script setup lang="ts">
import BuiAccordion from '@/components/BuiAccordion/BuiAccordion.vue'
import BuiButton from '@/components/BuiButton/BuiButton.vue'
import { ref } from 'vue'

const model = ref({ section1: true, section2: false } as Object)
const model2 = ref(false)

function collapseAll() {
  const newModel = {}
  Object.keys(model.value).forEach((key) => {
    newModel[key] = false
  })
  model.value = newModel
}
</script>

<template>
  <Story title="BuiAccordion" autoPropsDisabled :layout="{ type: 'grid', width: '50%' }">
    <Variant title="Default without description">
      <BuiAccordion title="My title">
        <div class="text-sm p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </BuiAccordion>
    </Variant>
    <Variant title="Collapsed by default with description and custom icon">
      <BuiAccordion title="My title" description="My description" v-model="model2">
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            class="cursor-pointer"
          >
            <g class="opacity-[0.56] dark:opacity-[1]">
              <rect width="16" height="16" rx="4" fill="transparent" />
              <path
                d="M12 10L8 6L4 10"
                stroke="#7371F9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </template>
        <div class="text-sm p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </BuiAccordion>
    </Variant>
    <Variant title="Several sections">
      {{ model }}
      <button @click="collapseAll" class="mb-4">Collapse all</button>
      <BuiAccordion
        title="Section #1"
        tag="h3"
        description="My description"
        v-model="model['section1']"
        class="mb-5"
      >
        <div class="text-sm p-4">Lorem ipsum dolor sit amet.</div>
      </BuiAccordion>
      <BuiAccordion
        title="Section #2"
        description="My description"
        v-model="model['section2']"
        tag="h3"
      >
        <div class="text-sm p-4">Ut enim ad minim veniam, quis nostrud exercitation.</div>
      </BuiAccordion>
    </Variant>
  </Story>
</template>

<style scoped></style>
