<template>
  <MovieDetail :id="id" />
</template>

<script setup lang="ts">
  const { id } = useRoute().params
</script>