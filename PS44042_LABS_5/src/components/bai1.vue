<script setup>
import { ref } from 'vue';
// const updateMessage = () => {
//     message.value = 'Thông điệp đã được thay đổi!';
// };
const isChanged = ref(false);
const message = ref('Thông điệp ban đầu');
const toggleMessage = () => {
    isChanged.value = !isChanged.value;
};
</script>

<template>
    <div class="p-5">
        <p v-if="!isChanged">{{ message }}</p>
        <p v-else>Thông điệp đã được thay đổi!</p>
        <!-- <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button> -->
        <button class="btn btn-dark" @click="toggleMessage">
            {{ isChanged ? 'Quay lại ban đầu' : 'Thay đổi thông điệp' }}
        </button>
    </div>
</template>

<style></style>