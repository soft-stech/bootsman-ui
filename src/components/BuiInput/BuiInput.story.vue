<script setup lang="ts">
import BuiInput from './BuiInput.vue'
import BuiToggle from '../BuiToggle/BuiToggle.vue'
import { ref } from 'vue'

const model = ref('')
const modelForDisabling = ref(false)
</script>

<template>
  <Story title="BuiInput" autoPropsDisabled :layout="{ type: 'grid', width: '400px' }">
    <Variant title="Default">
      <div class="p-2">
        <BuiInput label="Default" v-model="model" />
      </div>
    </Variant>
    <Variant title="Placeholder & required">
      <div class="p-2">
        <BuiInput
          label="Default"
          v-model="model"
          placeholder="Some text"
          :required="true"
          :validation-status="model.length > 0 ? undefined : 'error'"
        >
          <template #validationMessage> Some error text </template>
        </BuiInput>
      </div>
    </Variant>
    <Variant title="Error">
      <div class="p-2">
        <BuiInput
          label="Default"
          v-model="model"
          validation-status="error"
          :has-forced-validation="true"
        >
          <template #validationMessage> Some error text </template>
        </BuiInput>
      </div>
    </Variant>
    <Variant title="Success">
      <div class="p-2">
        <BuiInput
          label="Default"
          v-model="model"
          validation-status="success"
          :has-forced-validation="true"
        >
          <template #validationMessage> Some success text </template>
        </BuiInput>
      </div>
    </Variant>
    <Variant title="Helper text">
      <div class="p-2">
        <BuiInput label="Default" v-model="model">
          <template #helper> Some help text </template>
        </BuiInput>
      </div>
    </Variant>
    <Variant title="Prefix slot">
      <div class="p-2">
        <BuiInput label="Default" v-model="model">
          <template #prefix>
            <svg
              class="w-5 h-5 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>
          </template>
        </BuiInput>
      </div>
    </Variant>
    <Variant title="Suffix slot">
      <div class="p-2">
        <BuiInput label="Default" v-model="model">
          <template #suffix>
            <svg
              class="w-5 h-5 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>
          </template>
        </BuiInput>
      </div>
    </Variant>
    <Variant title="Dynamic disabling">
      <div class="p-2 bg-primary-800">
        <BuiToggle v-model="modelForDisabling" label="Disabled" />
        <BuiInput
          placeholder="Placeholder"
          label="My label"
          :disabled="modelForDisabling ? true : undefined"
        />
      </div>
    </Variant>
    <Variant title="Tooltip on hover">
      <div class="p-2">
        <BuiInput
          label="Default"
          v-model="model"
          info-tooltip-event="hover"
          info-tooltip="My tooltip info <a href='https://stsoft.ru'>ST Soft </a>"
        />
      </div>
    </Variant>
    <Variant title="Tooltip on click for required">
      <div class="p-2">
        <BuiInput
          label="Kubernetes Api Endpoint Port"
          placeholder="1-65535"
          :required="true"
          info-tooltip-event="click"
          info-tooltip="e.g. 6440"
          v-model="model"
        />
      </div>
    </Variant>
  </Story>
</template>
