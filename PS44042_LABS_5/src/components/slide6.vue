<script setup>
import { ref } from 'vue';
const step = ref(1);
const currentYear = new Date().getFullYear();
const birthYear = ref(null);
function userAge() {
    if (!birthYear.value) return 0;
    return currentYear - birthYear.value;
};
</script>

<template>
    <div class="container mt-4">
        <div class="card p-4 shadow-sm">
            <h5 class="card-title mb-3 text-primary">Tính tuổi của bạn</h5>

            <div class="mb-3">
                <input v-model.number="birthYear" type="number" class="form-control" placeholder="Enter your year of birth" />
            </div>

            <div v-if="userAge() > 0" class="mt-3">
                <p v-if="userAge() < 16" > Trẻ em cần sự bảo trợ đặc biệt
                </p>
                <p v-else-if="userAge() >= 16 && userAge() < 18" >Vị thành niên đang trong quá trình trưởng thành
                </p>
                <p v-else >Người trưởng thành
                </p>
            </div>
        </div>
    </div>
</template>

<style></style>