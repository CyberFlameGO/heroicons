<template>
  <svg :width="size || 24" :height="size || 24" :viewBox="`0 0 24 24`" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
    <path d="M5 11L12 4L19 11M5 19L12 12L19 19" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ChevronDoubleUp',
  props: {
    size: { type: Number, default: 0 },
  }
})
</script>
