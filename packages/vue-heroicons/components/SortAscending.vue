<template>
  <svg :width="size || 24" :height="size || 24" :viewBox="`0 0 24 24`" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
    <path d="M3 4H16M3 8H12M3 12H9M13 12L17 8M17 8L21 12M17 8V20" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SortAscending',
  props: {
    size: { type: Number, default: 0 },
  }
})
</script>
