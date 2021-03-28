<template>
  <svg :width="size || $WIDTH" :height="size || $HEIGHT" :viewBox="`0 0 $WIDTH $HEIGHT`" xmlns="http://www.w3.org/2000/svg" fill="$FILL" stroke="$STROKE">
    $SVG_INNER
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: '$PASCAL_NAME',
  props: {
    size: { type: Number, default: 0 },
  }
})
</script>
