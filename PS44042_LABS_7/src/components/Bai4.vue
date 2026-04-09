<script setup>
import {ref} from 'vue';
import Login from './login.vue';
import Comment from './comment.vue';
const isLoggedIn=ref(false);
const loggedInUser=ref('');
const loggedInSuccess = (username) => {
    loggedInUser.value = username;
    isLoggedIn.value = true;
}
const logout = () => {
    isLoggedIn.value = false;
    loggedInUser.value = '';
}
</script>

<template>
<div>
    <Login v-if="!isLoggedIn" @loggedIn="loggedInSuccess"/> 
    <Comment v-else :username="loggedInUser" @logout="logout"/>
</div>
</template>
