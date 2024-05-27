<template>
  <ol>
    <slot />
  </ol>
</template>
<script setup lang="ts">
</script>
<style scoped>
ol {
  margin: 12px 0;
}

ol::marker {
  color: #3881da;
}
</style>