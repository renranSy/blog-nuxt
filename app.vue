<template>
  <div>
    <Toast />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <IScrollTop />
  </div>
</template>
<script setup lang="ts">
import { useTagStore } from '~/store/tag'

useTagStore().init()
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  meta: [
    { name: 'baidu-site-verification', content: 'codeva-2ruBqadkDP' }
  ]
})
</script>
<style>
@import 'primevue/resources/themes/aura-light-green/theme.css';
@import 'primeicons/primeicons.css';

body {
  margin: 0;
  padding: 0;
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  @apply bg-pink-300;
  background: pink;
  border-radius: 2px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100;
  background: #f3f4f6;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}

</style>
