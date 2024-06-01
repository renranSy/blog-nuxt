<template>
  <article class="markdown-body">
    <div class="mb-8">
      <h1 class="mb-0 text-[28px]">{{ article.title }}</h1>
      <div class="flex items-center mt-1" style="height: 36px">
        <div class="flex items-center text-gray-500">
          发布时间：{{ dayjs(article.date).format('YYYY/MM/DD HH:mm') }}
        </div>
        <div class="flex  items-center text-gray-500 ms-4">
          浏览量：<span class="artalk-pv-count">...</span>
        </div>
      </div>
    </div>
    <ContentDoc :path="$route.path" />
    <Divider align="left" type="dotted">
      <h3>
        <b>留下评论 📝</b>
      </h3>
    </Divider>
    <div ref="el" class="pb-5"></div>
  </article>
</template>

<script setup lang="ts">
import Artalk from 'artalk'
import 'artalk/dist/Artalk.css'
import type { ParsedContent } from '@nuxt/content/types'
import dayjs from 'dayjs'
import sha256 from 'fast-sha256'

const el = ref<HTMLElement>()
const pvRef = ref<HTMLElement>()
const route = useRoute()

let artalk: Artalk
const article = ref<ParsedContent>({} as ParsedContent)

const getArticle = async () => {
  article.value = await queryContent(route.path).findOne()
}

onMounted(() => {
  getArticle()
  artalk = Artalk.init({
    el: el.value,
    pageKey: route.path,
    pageTitle: `${ document.title }`,
    server: 'https://blog.renranz.cn',
    site: '荏苒的个人博客'
  })
})

onBeforeUnmount(() => {
  artalk.destroy()
})
</script>

<style scoped>
</style>