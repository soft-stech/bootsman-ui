<script setup lang="ts">
import BuiCollapsableSection from '@/components/BuiCollapsableSection/BuiCollapsableSection.vue'
</script>

<template>
  <Story title="BuiCollapsableSection" autoPropsDisabled :layout="{ type: 'grid', width: '50%' }">
    <Variant title="Default without description">
      <BuiCollapsableSection title="My title">
        <div class="text-sm p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </BuiCollapsableSection>
    </Variant>
    <Variant title="Collapsed by default with description">
      <BuiCollapsableSection title="My title" description="My description" :isInitiallyOpen="false">
        <div class="text-sm p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </BuiCollapsableSection>
    </Variant>
    <Variant title="Several sections">
      <BuiCollapsableSection
        title="Section #1"
        description="My description"
        :isInitiallyOpen="true"
        class="mb-5"
      >
        <div class="text-sm p-4">Lorem ipsum dolor sit amet.</div>
      </BuiCollapsableSection>
      <BuiCollapsableSection
        title="Section #2"
        description="My description"
        :isInitiallyOpen="false"
      >
        <div class="text-sm p-4">Ut enim ad minim veniam, quis nostrud exercitation.</div>
      </BuiCollapsableSection>
    </Variant>
  </Story>
</template>

<style scoped></style>
