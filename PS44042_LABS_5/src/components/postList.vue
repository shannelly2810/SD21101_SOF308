<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    posts: {
        type: Array,
        required: true,
    }
});
const toggleDetails = (index) => {
    props.posts[index].show = !props.posts[index].show;
};
</script>

<template>
    <h2 class="mb-4 text-primary">Newest Blogs</h2>
    <ul class="list-group shadow-sm">
        <li class="list-group-item" v-for="(post, index) in posts" :key="index">
            <h4>{{ index+1 }} - {{ post.title }} - {{ post.author }}</h4>

            <button @click="toggleDetails(index)" class="btn btn-info btn-sm">
                {{ post.show ? "Ẩn chi tiết" : "Xem chi tiết" }}
            </button>

            <p v-show="post.show" class="mt-2 p-2 border-start border-info bg-light">
                {{ post.content }}
            </p>
        </li>
    </ul>
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