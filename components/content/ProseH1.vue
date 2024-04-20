<template>
  <h1 :id="id">
    <a
      v-if="generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h1)
</script>
<style scoped>
h1 {
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
  padding-bottom: 0.3em;
  font-size: 2.5em;
  border-bottom: 1px solid #d0d7deb3;
}
</style>