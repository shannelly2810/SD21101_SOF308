<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const postId = computed(() => route.params.id);
</script>
<template>
  <section>
    <h2>Blog Post</h2>
    <p>ID bài viết: {{ postId }}</p>
  </section>
</template>
