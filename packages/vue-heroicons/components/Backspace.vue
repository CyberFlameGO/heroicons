<template>
  <svg :width="size || 24" :height="size || 24" :viewBox="`0 0 24 24`" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
    <path d="M12 14L14 12M14 12L16 10M14 12L12 10M14 12L16 14M3 12L9.41421 18.4142C9.78929 18.7893 10.298 19 10.8284 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H10.8284C10.298 5 9.78929 5.21071 9.41421 5.58579L3 12Z" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Backspace',
  props: {
    size: { type: Number, default: 0 },
  }
})
</script>
