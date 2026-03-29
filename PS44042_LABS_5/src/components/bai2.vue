<script setup>
import { ref } from 'vue';
const userInput = ref('FPL');
</script>

<template>
    <div class="form-control">
        <input v-model="userInput" placeholder="Nhập dữ liệu vào đây" />
        <p>Giá trị bạn nhập: {{ userInput }}</p>
    </div>
</template>

<style></style>