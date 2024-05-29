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
        <NuxtLink @click="() => {
          umTrackEvent(item.event)
        }" :href="item.href" class="flex items-center justify-center no-underline text-gray-600">
          <template v-if="item.icon">
            <Button :icon="item.icon" text class="text-gray-600"></Button>
          </template>
          <template v-if="item.label">
            <Button :label="item.label" text class="text-gray-600" />
          </template>
        </NuxtLink>
      </template>
    </Menubar>
  </header>

</template>

<script setup lang="ts">
type Item = {
  label?: string
  href: string
  event: string
  icon?: string
}
const items = ref<Item[]>([
  {
    label: '主页',
    event: '点击主页',
    href: '/'
  },
  {
    label: '关于',
    event: '点击关于',
    href: '/about'
  },
  {
    label: '归档',
    event: '点击归档',
    href: '/archive'
  },
  {
    icon: 'pi pi-github text-xl',
    event: '点击Github',
    href: 'https://github.com/renranSy'
  }
])
</script>

<style scoped>
</style>