<template>
  <div class="time-line py-8">
    <div class="flex item">
      <div>
        <div class="line"></div>
      </div>
      <div class="ms-8">
        <div class="title relative text-lg text-gray-600">脚下泥泞，心上花开 ✨</div>
      </div>
    </div>
    <div v-for="(archive, index) in archiveList"
         :key="index"
         class="flex item">
      <div>
        <div class="line"></div>
      </div>
      <div class="ms-8 py-3">
        <div class="title mt-16 relative text-2xl font-bold">{{ archive.year }}</div>
        <div v-for="(post, index) in archive.posts"
             :key="index"
             class="post-title relative  mt-8 pb-1 pe-4 border-b border-b-style-solid border-b-gray-300">
          <NuxtLink :href="post.path"
                    class="cursor-pointer no-underline text-gray-600 hover:text-blue transition">
            <span class="text-sm">{{ post.month }}</span>
            <span class="ms-8">{{ post.title }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

type Archive = {
  year: string;
  posts: {
    month: string;
    title: string;
    path: string;
  }[]
}

const list = await queryContent('/posts').sort({ date: -1 }).find()
const archiveList = ref<Archive[]>([])

useHead({
  title: '✒路还很长，未来充满可能...',
  meta: [
    {
      name: 'description',
      content: '这里记录了我写过的文章。'
    }
  ]
})

onMounted(() => {
  let yearList = list.map((item) => dayjs(item.date).format('YYYY'))
  yearList = Array.from(new Set(yearList))
  yearList.forEach((year) => {
    const posts = list.filter((post) => dayjs(post.date).format('YYYY') === year)
    archiveList.value.push({
      year: year,
      posts: posts.map((item) => {
        return {
          month: dayjs(item.date).format('MM-DD'),
          title: item.title || '',
          path: item._path || ''
        }
      })
    })
  })

  umTrackView('/archive')
})
</script>

<style scoped>
.line {
  width: 2px;
  height: 100%;
  background: #d7d7d7;
}

.title {
  position: relative;
}

.time-line .item:first-child .title {
  margin-top: -10px;
}

.title::before {
  content: '';
  position: absolute;
  left: -38px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid pink;
}

.post-title::before {
  content: '';
  position: absolute;
  left: -37px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #d7d7d7;
  transition: 0.4s;
}

.post-title:hover::before {
  background: #ffffff;
  border: 2px solid deeppink;
}
</style>