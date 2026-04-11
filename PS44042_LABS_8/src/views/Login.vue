<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogin = () => {
  alert("Đăng nhập thành công");
  router.push('/');
};
</script>

<template>
  <div class="container mt-5">
    <div class="card mx-auto" style="max-width: 400px;">
      <div class="card-body">
        <h3 class="card-title">Đăng nhập</h3>
        <p class="text-muted">Dùng để test Guard Lab 8</p>
        <button @click="handleLogin" class="btn btn-primary w-100">Đăng nhập thành công</button>
      </div>
    </div>
  </div>
</template>
