<script setup>
import { defineProps } from 'vue';
defineProps({
    posts: {
        type: Array,
        required: true,
    }
})
</script>

<template>
    <h2>Blog list</h2>
    <div v-for="(p, index) in posts" :key="index" :class="{ 'highlighted': p.title.length > 20 }"
        :style="{ backgroundColor: p.backgroundColor, color: p.textColor }" class="posts">
        <h3 class="text-success">{{ p.title }}</h3>
        <h4 class="text-danger">{{ p.author }}</h4>
        <p class="text-break">{{ p.content }}</p>
    </div>
</template>

<style scoped>
.posts {
    padding: 20px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 10px;
}

.highlighted {
    border: 2px solid lightgray;
}
</style>