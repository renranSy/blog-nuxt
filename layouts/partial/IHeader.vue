<template>
  <header class="border-b-style-solid border-b-1 border-b-gray-100">
    <Menubar :model="items" class="max-w-[1200px] mx-auto px-3 py-5 flex justify-between items-center border-0">
      <template #start>
        <div>
          <NuxtLink href="/" class="text-2xl font-bold text-gray-800 no-underline">荏苒</NuxtLink>
          <div class="mt-1 text-gray-600">世界睡了🌙，故事醒着。</div>
        </div>
      </template>
      <template #item="{item}">
        <NuxtLink :href="item.href" class="flex items-center justify-center no-underline text-gray-600">
          <Button v-if="item.icon" :icon="item.icon" text class="text-gray-600"></Button>
          <Button v-if="item.label" :label="item.label" text class="text-gray-600" />
        </NuxtLink>
      </template>
    </Menubar>
  </header>

</template>

<script setup lang="ts">
const items = ref([
  {
    label: '主页',
    href: '/'
  },
  {
    label: '关于',
    href: '/about'
  },
  {
    label: '归档',
    href: '/archive'
  },
  {
    icon: 'pi pi-github text-xl',
    href: 'https://github.com/renranSY'
  }
])
</script>

<style scoped>
</style>