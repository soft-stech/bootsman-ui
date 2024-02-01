<script setup lang="ts">
import BuiTooltip from '@/components/BuiTooltip/BuiTooltip.vue'
</script>

<template>
  <Story title="BuiTooltip" autoPropsDisabled :layout="{ type: 'grid', width: '100%' }">
    <Variant title="variant 'info' on hover">
      <br /><br />
      <br /><br />
      <BuiTooltip
        variant="info"
        event="hover"
        content="My tooltip info <a href='https://stsoft.ru'>ST Soft</a>"
      />
      <br />
      <BuiTooltip variant="info" content="Another info" />
      <br /><br />
      <br /><br />
    </Variant>
    <Variant title="variant 'slot'">
      <br /><br />
      <br /><br />
      <BuiTooltip variant="slot" content="My tooltip info <a href='https://stsoft.ru'>ST Soft</a>">
        <template #element>
          <span class="p-2 text-primary-500 text-base"> Click here (slot) </span>
        </template>
      </BuiTooltip>
      <br /><br />
      <br /><br />
    </Variant>
    <Variant title="variant 'id'">
      <br /><br />
      <br /><br />
      <span id="div-for-tooltip" class="p-2 text-primary-500 text-base"> Click here (id) </span>
      <BuiTooltip
        variant="id"
        id="div-for-tooltip"
        content="My tooltip info <a href='https://stsoft.ru'>ST Soft</a>"
      />
      <br /><br />
      <br /><br />
    </Variant>
  </Story>
</template>
<style scoped></style>
