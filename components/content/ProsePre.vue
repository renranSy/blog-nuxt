<template>
  <pre :class="$props.class"><slot /><i @click="copy(code)" v-show="!isCopy" class="copy pi pi-copy"></i><i v-show="isCopy" class="copy pi pi-check-square"></i></pre>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})

const isCopy = ref(false)
const toast = useToast()
const copy = (code: string) => {
  isCopy.value = true
  navigator.clipboard.writeText(code)
  toast.add({ severity: 'success', summary: 'Success', detail: 'Copied!', life: 1000 });
  setTimeout(() => {
    isCopy.value = false
  }, 1000)
}
</script>

<style scoped>
pre code .line {
  display: block;
}

pre {
  position: relative;
  background: #f8fafc;
  border: 1px solid #e3e8f0;
  font-size: 1.2em;
  font-weight: 400;
  line-height: 1.70;
  padding: 0.5em;
  border-radius: 0.375em;
  overflow-x: auto;
}

pre > code {
  word-break: normal;
}

.copy {
  position: absolute;
  top: 0.65em;
  right: 0.5em;
  z-index: 9;
  cursor: pointer;
  color: #636c76;
  transition: color 150ms;
}

.copy:hover {
  color: #2a2a2a;
}
</style>