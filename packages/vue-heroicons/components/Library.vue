<template>
  <svg :width="size || 24" :height="size || 24" :viewBox="`0 0 24 24`" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
    <path d="M8 14V17M12 14V17M16 14V17M3 21H21M3 10H21M3 7L12 3L21 7M4 10H20V21H4V10Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Library',
  props: {
    size: { type: Number, default: 0 },
  }
})
</script>
