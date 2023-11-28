<script setup lang="ts">
import BuiCheckbox from './BuiCheckbox.vue'
import { ref } from 'vue'

const model = ref(false)
const model2 = ref(false)
</script>

<template>
  <Story title="BuiCheckbox" :layout="{ type: 'grid', width: '400px' }">
    <Variant title="INFO">
      {{ `v-model value: ${model}` }}
      <br />
      {{ `v-model option 2 value: ${model2}` }}
    </Variant>
    <Variant title="Only checkbox">
      <div class="p-2">
        <BuiCheckbox v-model="model" />
      </div>
    </Variant>
    <Variant title="Default">
      <div class="p-2">
        <BuiCheckbox v-model="model">
          My Label
          <template #description>My description</template>
        </BuiCheckbox>
      </div>
    </Variant>
    <Variant title="Disabled">
      <div class="p-2">
        <BuiCheckbox :disabled="true" v-model="model">
          My Label
          <template #description>My description</template>
        </BuiCheckbox>
      </div>
    </Variant>
    <Variant title="Readonly">
      <div class="p-2">
        <BuiCheckbox :readonly="true" :value="true">
          My Label
          <template #description>My description</template>
        </BuiCheckbox>
      </div>
    </Variant>
    <Variant title="List">
      <form ref="modelGeneral">
        <div class="flex flex-col">
          <BuiCheckbox groupName="options" option-name="option1" v-model="model">
            Option 1
          </BuiCheckbox>
          <BuiCheckbox groupName="options" option-name="option2" v-model="model2">
            Option 2
          </BuiCheckbox>
        </div>
      </form>
    </Variant>
  </Story>
</template>
