<script setup>
import {ref} from 'vue';
const msg = ref('FPT PolyTechnic');
const show = ref=(true);
</script>
<template>
    <div>
        <button @click="show=!show"> Click me show</button>
        <h1 v-if="show">{{ msg }}</h1>
        <hr>
        <h1 v-show="show" v-html="msg"></h1>
    </div>
    <div>
        <input type="text" v-model="msg">
    </div>
</template>
<style scoped>
</style>