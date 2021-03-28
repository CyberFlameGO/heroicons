<template>
  <svg :width="size || 24" :height="size || 24" :viewBox="`0 0 24 24`" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
    <path d="M13 17H21M21 17V9M21 17L13 9L9 13L3 7" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TrendingDown',
  props: {
    size: { type: Number, default: 0 },
  }
})
</script>
