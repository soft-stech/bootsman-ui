<script setup lang="ts">
import BuiSelect from './BuiSelect.vue'
import BuiInput from '../BuiInput/BuiInput.vue'
import { ref } from 'vue'

const model = ref('')
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
    <Variant title="Required">
      <div class="p-2">
        <BuiSelect
          label="Default"
          v-model="model"
          :options="options"
          :required="true"
          :validation-status="model ? null : 'error'"
        />
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
    <Variant title="With error status forced">
      <div class="p-2">
        <BuiSelect
          label="Default"
          :options="options"
          :validation-status="'error'"
          :has-forced-validation="true"
        >
          <template #validationMessage> Some error message </template>
        </BuiSelect>
      </div>
    </Variant>
    <Variant title="With success status forced">
      <BuiSelect
        label="Default"
        :options="options"
        :validation-status="'success'"
        :has-forced-validation="true"
      >
        <template #validationMessage> Some success message </template>
      </BuiSelect>
    </Variant>
    <Variant title="Required with dynamic validation">
      <BuiSelect
        label="Select right option (2)"
        :options="options"
        v-model="model"
        :validation-status="model !== '1' ? null : 'error'"
      >
        <template #validationMessage> Do not select 'One'</template>
      </BuiSelect>
    </Variant>
  </Story>
</template>
