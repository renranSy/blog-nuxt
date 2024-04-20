<template>
  <div class="flex">
    <div class="flex-1 border-e border-e-style-solid border-e-gray-300 pe-8">
      <ContentList path="posts" v-slot="{list}">
        <div class="py-8 border-b border-b-style-dashed border-b-gray-300" v-for="post in list">
          <NuxtLink class="text-xl no-underline text-gray8 font-bold hover:text-blue" :href="post._path">
            {{ post.title }}
          </NuxtLink>
          <div class="markdown-body mt-3">
            <ContentRendererMarkdown :value="post.excerpt" />
          </div>
          <NuxtLink :href="post._path"
                    class="underline text-color-[#0969da] underline-offset-[0.2rem]">
            继续阅读
          </NuxtLink>
          <div class="flex items-center mt-2">
            <div class="flex items-center">
              <i class="pi pi-clock text-sm text-gray-400"></i>
              <span class="text-gray-400 ms-1 text-sm">{{ dayjs(post.date).format('YYYY-MM-DD') }}</span>
            </div>
            <div>
              <NuxtLink v-for="(tag, index) in post.tags" :key="index" :href="'/tags/' + tag" class="no-underline ms-2">
                <Tag class="cursor-pointer" severity="secondary" :value="tag"></Tag>
              </NuxtLink>
            </div>
          </div>
        </div>
      </ContentList>
    </div>
    <div class="ps-8 w-[280px] mt-8 hidden md:block">
      <ISidebar />
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

useHead({
  title: '✨这是荏苒的个人博客',
  meta: [
    {
      name: 'description',
      content: '这里是荏苒的个人博客网站，一名渴望成为大牛的大学生程序员。'
    }
  ]
})
</script>

<style scoped>
:deep(.p-card-body) {
  padding: 4px;
}
</style>