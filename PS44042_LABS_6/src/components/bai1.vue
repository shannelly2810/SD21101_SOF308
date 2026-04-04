<script setup>
import { ref } from 'vue';

const inputGrade = ref(null);
const resultGrade = ref(null);
const errorMessage = ref('');

const checkPerformance = () => {
  errorMessage.value = '';
  resultGrade.value = null;
  if (inputGrade.value === null || inputGrade.value < 0 || inputGrade.value > 10) {
    errorMessage.value = "Invalid Input ! Try again ( 0.0 - 10.0 )";
  } else {
    resultGrade.value = inputGrade.value;
  } 
};
</script>

<template>
  <div class="container mt-4">
    <div class="card p-4 shadow-sm">
      <h5 class="card-title mb-3 text-primary">Xét học lực</h5>

      <div class="mb-3">
        <label class="form-label">Nhập điểm của bạn:</label>
        <input 
          v-model.number="inputGrade" 
          type="number" 
          class="form-control" 
          placeholder="0.0 - 10.0"
          min="0.0"
          max="10.0"
          step="0.1"
          @keyup.enter="checkPerformance"
        />
      </div>
      <button @click="checkPerformance" class="btn btn-primary w-100 mb-3">Xem kết quả</button>
      <div v-if="errorMessage" class="alert alert-warning py-2">
        {{ errorMessage }}
      </div>

      <div v-if="resultGrade !== null" class="mt-2 border-top pt-3">
        <p class="mb-1">Điểm: <strong>{{ resultGrade }}</strong></p>
        <h4 v-if="resultGrade >= 9.0" class="text-success">Học lực xuất sắc 🌟</h4>
        <h4 v-else-if="resultGrade >= 8.0" class="text-success">Học lực giỏi ✨</h4>
        <h4 v-else-if="resultGrade >= 6.5" class="text-info">Học lực khá 👍</h4>
        <h4 v-else-if="resultGrade >= 5.0" class="text-warning">Học lực trung bình 👌</h4>
        <h4 v-else class="text-danger">Học lực yếu 📚</h4>
      </div>
    </div>
  </div>
</template>