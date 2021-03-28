<template>
  <svg :width="size || 20" :height="size || 20" :viewBox="`0 0 20 20`" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z" fill="#4A5568"/>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeartSolid',
  props: {
    size: { type: Number, default: 0 },
  }
})
</script>
