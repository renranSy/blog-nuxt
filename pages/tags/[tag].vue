<template>
  <div>
    <div>
      <Button v-for="tag in tagStore.allTags"
              @click="changeTag(tag.name)"
              class="me-2 text-sm"
              :severity="tag.name === currentTag ? undefined : 'secondary'"
              :raised="tag.name === currentTag"
              :label="tag.name"></Button>
    </div>
    <div ref="listRef">
      <div class="py-8 border-b border-b-style-dashed border-b-gray-300" v-for="post in posts">
        <NuxtLink class="text-xl no-underline text-gray8 font-bold hover:text-blue" :href="post._path">
          {{ post.title }}
        </NuxtLink>
        <div class="markdown-body mt-3">
          <template v-if="post.excerpt">
            <ContentDoc :path="post._path" :excerpt="true" />
          </template>
        </div>
        <NuxtLink :href="post._path"
                  class="underline text-color-[#0969da] underline-offset-[0.2rem]">
          继续阅读
        </NuxtLink>
        <div class="flex items-center">
          <div class="flex items-center">
            <i class="pi pi-clock text-sm text-gray-400"></i>
            <span class="text-gray-400 ms-1 text-sm">{{ dayjs(post.date).format('YYYY-MM-DD') }}</span>
          </div>
          <div>
            <NuxtLink v-for="(tag, index) in post.tags" :key="index" :href="'/tags/' + tag">
              <Tag class="ms-2 text-md cursor-pointer" severity="secondary">{{ tag }}</Tag>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTagStore } from '~/store/tag'
import dayjs from 'dayjs'
import type { ParsedContent } from '@nuxt/content'

const route = useRoute()
const tagStore = useTagStore()

const [listRef] = useAutoAnimate()

const currentTag = ref<string>('')
const posts = ref<ParsedContent[]>([])
const changeTag = (value: string) => {
  currentTag.value = value
}

watch(() => currentTag.value, async (value) => {
  const { data } = await useAsyncData('get-post-by-tag', () => queryContent('/posts').where({ tags: { $contains: value } }).sort({ date: -1 }).find())
  if (data.value !== null) {
    posts.value = data.value
  }
})

onMounted(() => {
  currentTag.value = route.params.tag.toString()
})
</script>

<style scoped>

</style>
