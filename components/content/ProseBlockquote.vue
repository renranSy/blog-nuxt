<template>
  <blockquote>
    <slot />
  </blockquote>
</template>
<style scoped>
blockquote {
  display: block;
  padding: 0 1em;
  margin: 0 0 16px;
  unicode-bidi: isolate;
  color: #636c76;
  border-left: 0.25em solid #d0d7de;
}
</style>