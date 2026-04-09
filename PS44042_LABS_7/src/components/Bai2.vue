<script setup>
import { ref } from 'vue';
// const sL = ref([]);
// const checkedNames =ref([]);
// const lO = [
//     { key: 'VN', label: 'Tieng Viet' },
//     { key: 'EN', label: 'Tieng Anh' },
//     { key: 'CN', label: 'Tieng Trung' }
// ];
const isLoggedIn = ref(false);
const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const login = () => {
emailError.value = '';
passwordError.value = '';
if (!email.value) {
emailError.value = 'Email là bắt buộc.';
} else if (!emailRegex.test(email.value)) {
emailError.value = 'Vui lòng nhập email hợp lệ.';
}
if (!password.value) {
passwordError.value = 'Mật khẩu là bắt buộc.';
}
if (!emailError.value && !passwordError.value) {
isLoggedIn.value = true;
}
}
const logout = () => {
isLoggedIn.value = false;
email.value = '';
password.value = '';
emailError.value = '';
passwordError.value = '';
}
</script>

<template>
    <!-- <div class="container mt-4">

        <div class="card p-4">
            <h3>Select Your Languages</h3>

            <div v-for="lang in lO" :key="lang.key" class="form-check mb-2">
                <input class="form-check-input" type="checkbox" :id="lang.key" :value="lang.label" v-model="sL">
                <label class="form-check-label" :for="lang.key">
                    {{ lang.label }}
                </label>
            </div>
            <div>
                <p>Ngôn ngữ bạn chọn: {{ sL.join(', ') }}</p>
            </div>
        </div>
    </div> -->
    <!-- <div v-for="a in lO" :key="a.key" >
        <input type="checkbox" :id="a.key" :value="a.label" v-model="sL">
        <label>{{ a.label }}</label>
    </div>
        <p>{{ sL.join(', ') }}</p> -->
<!-- <div>
<input type="checkbox" value="HTML" v-model="checkedNames">HTML <br>
<input type="checkbox" value="CSS" v-model="checkedNames">CSS <br>
<input type="checkbox" value="JavaScript" v-model="checkedNames">JavaScript <br>
<hr>

    <div v-if="checkedNames.length > 0" class="mt-3">
      <strong>Selected Keys:</strong> 
      <span class="text-primary">{{ checkedNames.join(', ') }}</span>
    </div>

    <div v-else class="text-muted mt-3">
      Please select at least one skill.
    </div> 
</div> -->
<div v-if="!isLoggedIn" class="p-5 col-sm-4">
<h3>Form Đăng nhập</h3>
<form @submit.prevent="login">
<div class="mb-3 mt-3">
<label>Email:</label>
<input type="email" class="form-control" v-model="email"
placeholder="Nhập email">
<p v-if="emailError" style="color: red;">{{ emailError }}</p>
</div>
<div class="mb-3">
<label>Mật khẩu:</label>
<input type="password" class="form-control" v-model="password"
placeholder="Nhập mật khẩu">
<p v-if="passwordError" style="color: red;">{{ passwordError }}</p>
</div>
<button type="submit" class="btn btn-primary">Đăng nhập</button>
</form>
</div>
<div v-else class="p-5 col-sm-5">
<h3>Chào mừng, {{ email }}!</h3>
<button @click="logout" class="btn btn-primary">Đăng xuất</button>
</div>

</template>