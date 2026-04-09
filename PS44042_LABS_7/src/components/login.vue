<script setup>
import { ref,defineEmits } from 'vue';
const emit = defineEmits(['loggedIn']);
const isLoggedIn = ref(false);
const username = ref('');
const password = ref('');
const usernameError = ref('');
const passwordError = ref('');
const login = () => {
usernameError.value = '';
passwordError.value = '';
if (!username.value) {
usernameError.value = 'Username của bạn đâu rồi ?';
}
if (!password.value) {
passwordError.value = 'Mật khẩu bị trống rồi này bạn ơi!';
}
if (!usernameError.value && !passwordError.value) {
emit('loggedIn', username.value);
}
}
</script>
<template>
<div v-if="!isLoggedIn" class="p-5 col-sm-4">
<h3>Login</h3>
<form @submit.prevent="login">
<div class="mb-3 mt-3">
<label>Username:</label>
<input type="text" class="form-control" v-model="username"
placeholder="Nhập tên đăng nhập của bạn">
<p v-if="usernameError" style="color: red;">{{ usernameError }}</p>
</div>
<div class="mb-3">
<label>Password:</label>
<input type="password" class="form-control" v-model="password"
placeholder="Nhập mật khẩu của bạn">
<p v-if="passwordError" style="color: red;">{{ passwordError }}</p>
</div>
<button type="submit" class="btn btn-primary">Đăng nhập</button>
</form>
</div>
</template>