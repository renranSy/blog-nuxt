<template>
  <pre :class="$props.class">
    <span class="content"><slot /></span>
    <i @click="copy(code)" v-show="!isCopy"
       class="copy pi pi-copy"></i>
    <i v-show="isCopy" class="copy pi pi-check-square"></i>
  </pre>
</template>

<script setup lang="ts">
import clipboard from 'clipboardy'

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
  clipboard.write(code)
  toast.add({ severity: 'success', summary: 'Copied!', detail: '已复制到剪切板', life: 1000 })
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
  display: flex;
  position: relative;
  background: #f8fafc;
  border: 1px solid #e3e8f0;
  font-size: 1.2em;
  font-weight: 400;
  line-height: 1.70;
  padding: 0.5em;
  border-radius: 0.375em;
}

pre > code {
  word-break: normal;
}

.content {
  width: calc(100vw - 24px);
  overflow-x: auto;
}

.copy {
  cursor: pointer;
  color: #636c76;
  transition: color 150ms;
}

.copy:hover {
  color: #2a2a2a;
}
</style>