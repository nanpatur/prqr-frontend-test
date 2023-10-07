<template>
  <Home />
</template>

<script setup lang="ts">
const title = ref('My App')
const description = ref('My App Description')

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>