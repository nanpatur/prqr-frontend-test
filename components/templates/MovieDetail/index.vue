<template>
  <Container>
    <h1>Movie detail {{ id }}</h1>
    <slot></slot>
  </Container>
</template>

<script setup lang="ts">
  const props = defineProps({
    id: String,
  })
</script>