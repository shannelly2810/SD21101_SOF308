<script setup>
  import { onMounted } from 'vue';
  import Bai1 from './components/Bai1.vue';
  import Bai2 from './components/Bai2.vue'; 
  import Bai3 from './components/Bai3.vue';
  import Bai4 from './components/Bai4.vue';
  import Slide4 from './components/slide4l4.vue';
  import Slide42 from './components/slide4l42.vue';
  import Slide5 from './components/slide5l2-ref-reactivity.vue';

  const switchTabByHash = () => {
    const hash = window.location.hash; 
    if (hash) {
      const tabTriggerEl = document.querySelector(`button[data-bs-target="${hash}"]`);
      // Kiểm tra xem bootstrap có tồn tại không để tránh lỗi trắng trang
      if (tabTriggerEl && window.bootstrap) {
        const tab = new window.bootstrap.Tab(tabTriggerEl);
        tab.show();
      }
    }
  };

  onMounted(() => {
    switchTabByHash();
    window.addEventListener('hashchange', switchTabByHash);
  });   
</script>

<template>
  <div class="container mt-5">
    <h1 class="text-center">30 - PS44042 - Trần Nguyễn Tấn Phát - Lab 4</h1>
    
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#ex1">Bài 1</button></li>
      <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#ex2">Bài 2</button></li>
      <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#ex3">Bài 3</button></li>
      <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#ex4">Bài 4</button></li>
      <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#slide4">Slide 4-1</button></li>
      <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#slide42">Slide 4-2</button></li>
      <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#slide5">Slide 5</button></li>
    </ul>

    <div class="tab-content border p-3">
      <div class="tab-pane fade show active" id="ex1"><Bai1 /></div>
      <div class="tab-pane fade" id="ex2"><Bai2 /></div>
      <div class="tab-pane fade" id="ex3"><Bai3 /></div>
      <div class="tab-pane fade" id="ex4"><Bai4 /></div>
      <div class="tab-pane fade" id="slide4"><Slide4 /></div>
      <div class="tab-pane fade" id="slide42"><Slide42 /></div>
      <div class="tab-pane fade" id="slide5"><Slide5 /></div>
    </div>
  </div>
</template>