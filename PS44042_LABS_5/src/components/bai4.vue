<script setup>
import {ref} from 'vue';
import postList from './postList.vue';
import postCreate from './postCreate.vue';
const posts=ref([])
function addPost(post){
    posts.value.push(post)
}
</script>

<template>
<div class="col-sm-8 mx-auto">
    <h1>Ứng dụng Blog nhỏ với VueJS/ViteJS</h1>
    <hr>
    <postCreate @add-post="addPost"></postCreate>
    <hr>
    <postList :posts="posts"></postList>
</div>
</template>

<style scoped>

</style>