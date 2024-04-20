<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="link"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & {}) | null | undefined>,
    default: undefined,
    required: false
  }
})
</script>
<style scoped>
a {
  color: #0969da;
  text-decoration: underline;
  text-underline-offset: .2rem;
}
</style>