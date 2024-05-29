<template>
  <Fieldset legend="留言">
    <p class="m-0">
      既然选择了远方，便只顾风雨兼程。
    </p>
  </Fieldset>
</template>

<script setup lang="ts">
useHead({
  title: '🧐也许你想了解我',
  meta: [
    {
      name: 'description',
      content: '荏苒，renran，renranSy，这是我的自我介绍'
    }
  ]
})

onMounted(() => {
  umTrackView('/about')
})
</script>

<style scoped>

</style>