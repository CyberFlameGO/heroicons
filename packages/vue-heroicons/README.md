# Usage

```js
// nuxt.config.js

export default {
  components: [
    '~/components',
    { path: 'node_modules/@bloxlink/vue-heroicons/components', prefix: 'hero-icon' },
  ],
}
```

```vue
<!-- CloseButton.vue -->

<template>
  <button class="btn">
    <HeroIconBell />
  </button>
</template>
```

The only prop to each icon is `size`, which changes the width and height in pixels. However, they should scale with the `font-size`.
