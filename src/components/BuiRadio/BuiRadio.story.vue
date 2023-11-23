<script setup lang="ts">
import BuiRadio  from './BuiRadio.vue'
import {reactive, ref} from 'vue'

const model = ref("1")

</script>

<template>
  <Story title="BuiRadio" :layout="{ type: 'grid', width: '400px' }">
    <Variant title="INFO">
      {{`v-model value: ${model}`}}
    </Variant>
    <Variant title="Only radio">
      <div class="p-2">
        <BuiRadio option-value="1" v-model="model" />
      </div>
      <div class="p-2">
        <BuiRadio option-value="1" v-model="model" />
      </div>
    </Variant>
    <Variant title="Default">
      <div class="p-2">
        <BuiRadio option-value="1" v-model="model" >My Label <template #description>My description</template></BuiRadio>
      </div>
    </Variant>
    <Variant title="Disabled">
      <div class="p-2">
        <BuiRadio :disabled="true" option-value="2" v-model="model" >My Label <template #description>My description</template></BuiRadio>
      </div>
    </Variant>
    <Variant title="List">
      <fieldset>
        <div class="flex flex-col">
          <BuiRadio groupName="options" option-value="1" v-model="model" >Option 1 </BuiRadio>
          <BuiRadio  groupName="options" option-value="2" v-model="model">Option 2</BuiRadio>
        </div>
      </fieldset>
    </Variant>
  </Story>
</template>
