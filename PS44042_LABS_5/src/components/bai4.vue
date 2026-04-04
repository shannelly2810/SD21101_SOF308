<script setup>
// import {ref} from 'vue';
import { reactive } from 'vue';
import postList from './postList.vue';
import postCreate from './postCreate.vue';

const posts = reactive([
    {
        title: "Hành trình học VueJS tại FPL",
        author: "Nguyễn",
        content: "Hôm nay mình bắt đầu học về Component và Props. Thật thú vị khi có thể chia nhỏ giao diện!",
        backgroundColor: "#e3f2fd",
        textColor: "#0d47a1",
        show: false
    },
    {
        title: "Tips Bootstrap 5 cho Web Lab",
        author: "Nhung",
        content: "Sử dụng 'mx-auto' để căn giữa và 'shadow-sm' cho các thẻ Card trông xịn hơn nhé.",
        backgroundColor: "#f8f9fa",
        textColor: "#212529",
        show: false,
    },
    {
        title: "Cấu trúc Nesting Doll (Thú vị!)",
        author: "Lam",
        content: "Đặt Form trong Tab, rồi Tab trong Modal giúp quản lý bài Lab cực kỳ gọn gàng.",
        backgroundColor: "#fff3cd",
        textColor: "#856404",
        show: false
    }
]);
// function addPost(post){                   -  When using ref
//     posts.value.push(post)
// }
// function addPost(post){
//     posts.push(post);
//     posts.unshift(post);
// }
function addPost(post) {
    posts.reverse();
    posts.push(post);
    const newPost = { ...post, show: false };
    posts.reverse();

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

<style scoped></style>