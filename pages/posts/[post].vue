<template>
  <article class="markdown-body">
    <ContentDoc :path="$router.path" />
    <div ref="el"></div>
  </article>
</template>

<script setup lang="ts">
import Artalk from 'artalk'
import 'artalk/dist/Artalk.css'

const el = ref<HTMLElement>()
const route = useRoute()

let artalk: Artalk

onMounted(() => {
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