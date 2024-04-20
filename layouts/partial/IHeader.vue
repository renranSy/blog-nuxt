<template>
  <header class="border-b-style-solid border-b-1 border-b-gray-100">
    <div class="max-w-[1200px] mx-auto px-2 py-5 flex justify-between items-center">
      <div>
        <NuxtLink href="/" class="text-2xl font-bold text-gray-800 no-underline">荏苒</NuxtLink>
        <div class="mt-1 text-gray-600">世界睡了🌙，故事醒着。</div>
      </div>
      <div class="flex items-center">
        <NuxtLink href="/">
          <Button label="主页" severity="secondary" text />
        </NuxtLink>
        <NuxtLink href="/about">
          <Button label="关于" severity="secondary" text />
        </NuxtLink>
        <NuxtLink href="/archive">
          <Button label="归档" severity="secondary" text />
        </NuxtLink>
        <a class="text-black" href="https://github.com/renranSY" target="_blank">
          <Button icon="pi pi-github text-xl" class="text-gray-800" severity="secondary" text />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
.router-link-active .router-link-exact-active  {
  @apply underline
}
</style>