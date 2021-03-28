<template>
  <svg :width="size || 24" :height="size || 24" :viewBox="`0 0 24 24`" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
    <path d="M11 19L4 12L11 5M19 19L12 12L19 5" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ChevronDoubleLeft',
  props: {
    size: { type: Number, default: 0 },
  }
})
</script>
