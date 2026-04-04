<script setup>
import { ref } from 'vue';
import img1 from '../assets/images/1stArticle.jpg'; 
import img2 from '../assets/images/2ndArticle.jpg';
import img3 from '../assets/images/3rdArticle.jpg'; 
const items = ref([
  { 
    title: '8 loại rau củ quả giàu canxi', 
    content: 'Canxi là khoáng chất cần thiết đối với cơ thể người...', 
    image: img1
  },
  { 
    title: 'Các loại gia vị tốt cho sức khỏe', 
    content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa...', 
    image: img2
  },
  { 
    title: '9 loại đậu bổ dưỡng nên dùng nhiều', 
    content: 'Đậu lăng, đậu nành, đậu phộng giàu chất xơ và protein...', 
    image: img3
  }
]);
</script>

<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
      <div v-for="(item, index) in items" :key="index" class="col-sm-4 mb-4">
        <div class="card h-100">
          <img :src="item.image" class="card-img-top" alt="Health News" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text text-secondary">{{ item.content }}</p>
            <button class="btn btn-info text-white">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.card-img-top {
  height: 200px;
  object-fit: cover;   
  width: 100%;  
}

.card {
  display: flex;
  flex-direction: column;
}

.card-title {
  height: 3.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
}

.card-text {
  flex-grow: 1;
  margin-bottom:1.5rem;
  min-height:4rem;
}

.btn-info {
  margin-bottom: 0.5rem;
}
</style>