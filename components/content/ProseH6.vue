<template>
  <h6 :id="id">
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h6>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h6)
</script>
<style scoped>
h6 a {
  color: #1F2328;
  text-decoration: none;

}

h6 {
  padding-bottom: 0.3em;
  font-size: 0.9em;
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}
</style>