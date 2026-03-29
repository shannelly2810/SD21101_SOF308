<script setup>
import {ref} from 'vue';

const emit = defineEmits(['add-post'])
const title = ref('')
const author = ref('')
const content = ref('')

function submitPost(){
    if(title.value && author.value && content.value){
        const newPost = {
            title:title.value,
            author:author.value,
            content:content.value,
            backgroundColor: '#f8f9fa',
            textColor: '#212529',
        }
        emit('add-post',newPost);
        title.value = ''
        author.value = ''
        content.value = ''
    }
}
</script>

<template>
<div>
    <div class="card p-3 mb-4">
    <h2>Create a blog</h2>
    <input v-model="title" class="form-control mb-3" placeholder="Enter your blog's title here" />
    <input v-model="author" class="form-control mb-3" placeholder="Blog's author" />
    <textarea v-model="content" class="form-control mb-3" placeholder="Blog's content goes here" rows="3"></textarea>
    <button class="btn btn-primary w-100 mt-1" @click="submitPost">Submit</button>
    </div>
</div>
</template>

<style scoped>

</style>