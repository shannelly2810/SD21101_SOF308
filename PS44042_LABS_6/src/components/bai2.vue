<!-- <script setup>
import { ref } from 'vue';

const inputMonth = ref(null);
const resultMonth = ref(null);
const errorMessage = ref('');

const checkSeason = () => {
  errorMessage.value = '';
  resultMonth.value = null;
  if (inputMonth.value === null || inputMonth.value < 1 || inputMonth.value > 12) {
    errorMessage.value = "Invalid Input ! Try again ( 1(January) - 12(December) )";
  } else {
    resultMonth.value = inputMonth.value;
  } 
};
</script>
<template>
  <div class="container mt-4">
    <div class="card p-4 shadow-sm">
      <h5 class="card-title mb-3 text-primary">Tìm kiếm mùa tương ứng với tháng</h5>

      <div class="mb-3">
        <label class="form-label">Nhập tháng bạn muốn truy cứu:</label>
        <input 
          v-model.number="inputMonth" 
          type="number" 
          class="form-control" 
          placeholder="1(January) - 12(December)"
          min="1"
          max="12"
          step="1"
          @keyup.enter="checkSeason"
        />
      </div>
      <button @click="checkSeason" class="btn btn-primary w-100 mb-3">Xem kết quả</button>
      <div v-if="errorMessage" class="alert alert-warning py-2">
        {{ errorMessage }}
      </div>

      <div v-if="resultMonth !== null" class="mt-2 border-top pt-3">
        <p class="mb-1">Tháng: <strong>{{ resultMonth }}</strong></p>
        <h4 v-if="resultMonth >= 1 && resultMonth <= 3 " class="text-success">Mùa Xuân 🌸</h4>
        <h4 v-else-if="resultMonth <= 6" class="text-danger">Mùa Hè ⛱</h4>
        <h4 v-else-if="resultMonth <= 9" class="text-warning">Mùa Thu 🍂</h4>
        <h4 v-else class="text-info">Mùa Đông ⛄</h4>
      </div>
    </div>
  </div>
</template> -->
<!-- ---------------------------------------------------------------------------------------------- -->
<script setup>
import { ref } from 'vue';

const inputMonth = ref(''); 
const valueMonth = ref(0); 
const errorMessage = ref('');

const checkMonth = () => {
  errorMessage.value = '';
  valueMonth.value = 0;

  const value = inputMonth.value.trim().toLowerCase();
  const months = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
  ];

  if (!isNaN(value) && value !== '' && value >= 1 && value <= 12) {
    valueMonth.value = parseInt(value);
  } else {
    const foundIndex = months.indexOf(value);
    if (foundIndex !== -1) {
      valueMonth.value = foundIndex + 1;
    } else if (value !== '') {
      errorMessage.value = "Invalid Input! Try 1-12 or January-December.";
    }
  }
};
</script>

<template>
<div class="container mt-3">
  <div class="card p-4 shadow-sm">
    <h5 class="card-title text-primary">Check Season</h5>
    
    <input 
      type="text" 
      class="form-control mb-3" 
      v-model="inputMonth" 
      placeholder="Enter 1 or January..."
      @keyup.enter="checkMonth" 
    />

    <button @click="checkMonth" class="btn btn-primary w-100 mb-3">Xem kết quả</button>

    <div v-if="errorMessage" class="alert alert-warning py-2 small">
      {{ errorMessage }}
    </div>

    <div v-if="valueMonth > 0">
      <p class="mb-1">Tháng: <strong>{{ valueMonth }}</strong></p>
      <div v-if="valueMonth >= 1 && valueMonth <= 3" class="alert alert-primary">🌸 Mùa Xuân (Spring)</div>
      <div v-else-if="valueMonth <= 6" class="alert alert-warning">☀️ Mùa Hè (Summer)</div>
      <div v-else-if="valueMonth <= 9" class="alert alert-success">🍂 Mùa Thu (Autumn)</div>
      <div v-else class="alert alert-info">❄️ Mùa Đông (Winter)</div>
    </div>    
  </div>
</div>
</template>