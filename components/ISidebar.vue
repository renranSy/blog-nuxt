<template>
  <InputGroup>
    <InputText placeholder="搜索" v-model:value="search" @keydown.enter="onSearch" />
    <InputGroupAddon @click="onSearch">
      <i class="pi pi-search"></i>
    </InputGroupAddon>
  </InputGroup>
  <div class="mt-8">
    <div class="flex items-center text-gray-700 text-xl">
      <i class="pi pi-hashtag text-lg"></i>
      <span class="ms-2 font-bold">标签</span>
    </div>
    <NuxtLink v-for="(tag, index) in tagStore.allTags" :key="index" :href="'/tags/' + tag.name"
              class="my-1 text-gray-700 cursor-pointer hover:text-blue block no-underline">
      {{ tag.name }}（{{ tag.count }}）
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useTagStore } from '~/store/tag'

const tagStore = useTagStore()

const search = ref('')

const onSearch = async () => {
  const results = await useAsyncData('search-articles', () => queryContent('/posts').where({ title: { $containsAny: [search.value] } }).find())
  console.log(results.data)
}
</script>

<style scoped>

</style>