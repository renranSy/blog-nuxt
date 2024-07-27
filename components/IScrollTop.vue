<template>
  <div ref="scrollTopRef"
       @click="onScrollTop"
       class="scroll-top w-[3rem] h-[3rem] rounded-full flex justify-center items-center cursor-pointer">
    <i class="pi pi-angle-up text-2xl text-white"></i>
  </div>
</template>

<script setup lang="ts">
const scrollTopRef = ref<HTMLDivElement | null>(null)

const onScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handler = () => {
  if (!scrollTopRef.value) {
    return
  }
  if (document.documentElement.scrollTop > 200) {
    scrollTopRef.value.style.opacity = '1'
    scrollTopRef.value.style.zIndex = '1000'
  } else {
    scrollTopRef.value.style.opacity = '0'
    scrollTopRef.value.style.zIndex = '-1'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handler)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handler)
})
</script>

<style scoped>
.scroll-top {
  background: #f9a8d4;
  position: fixed;
  right: 5rem;
  bottom: 3rem;
  z-index: 1000;
  box-shadow: rgba(0, 0, 0, 0.2) 0 12px 28px 0, rgba(0, 0, 0, 0.1) 0 2px 4px 0, rgba(255, 255, 255, 0.05) 0 0 0 1px inset;
  transition: all 300ms;
  opacity: 0;
}

.scroll-top:hover {
  background: #f472b6;
}
</style>
