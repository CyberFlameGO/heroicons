<template>
  <svg :width="size || 24" :height="size || 24" :viewBox="`0 0 24 24`" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
    <path d="M19 9L12 16L5 9" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ChevronDown',
  props: {
    size: { type: Number, default: 0 },
  }
})
</script>
