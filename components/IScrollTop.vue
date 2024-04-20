<template>
  <div ref="scrollTopRef">
    <ScrollTop
      :threshold="100"
      icon="pi pi-arrow-up"
      :pt="{
            root: 'w-3rem h-3rem bg-pink-300',
            icon: {
                class: 'text-base text-lg'
            }
        }" />
  </div>
</template>

<script setup lang="ts">
const [scrollTopRef] = useAutoAnimate()
</script>

<style scoped>
.scroll-top {
  position: fixed;
  right: 80px;
  bottom: 40px;
}
</style>