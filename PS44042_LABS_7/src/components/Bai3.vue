<script setup>
import {ref} from 'vue';

const fullName = ref('');
const email = ref('');
const password = ref('');
const dOb = ref('');

const fullNameError = ref('');
const emailError = ref('');
const passwordError = ref('');
const dObError = ref('');

const fullNameRegex = /^[\p{L}\s]{2,50}$/u;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,20}$/;

const gender = ref(['male','female','others']);
const genderSelected = ref('');
const language = ref([
    {key:'VN',label:'Tiếng Việt'},
    {key:'EN',label:'Tiếng Anh'},
    {key:'CN',label:'Tiếng Trung'}
]);
const languageSelected = ref ([]);

const isRegistered = ref(false);;
const register = () => {
    fullNameError.value='';
    emailError.value='';
    passwordError.value='';

    if(!fullName.value){
        fullNameError.value="Họ Tên là bắt buộc."
    }else if(!fullNameRegex.test(fullName.value)){
        fullNameError.value="Họ tên không được chứa số đâu bạn ơi!"
    }

    if(!email.value){
        emailError.value="Email là bắt buộc.";
    }else if(!emailRegex.test(email.value)){
        emailError.value="Vui lòng nhập email hợp lệ nha bạn.";
    }

    if(!password.value){
        passwordError.value="Mật khẩu là bắt buộc.";
    }else if(!passwordRegex.test(password.value)){
        passwordError.value="Mật khẩu 6-20 ký tự, cần 1 chữ hoa và 1 số bạn nhé.";
    }

    if(!dOb.value){
        dObError.value="Bạn quên nhập ngày sinh của bạn rồi !"
    }

    if(!fullNameError.value && !emailError.value && !passwordError.value && !dObError.value){
        isRegistered.value=true;
    }
}
const goBack = () => {
        isRegistered.value=false;
        fullName.value='';
        email.value='';
        password.value='';
        dOb.value='';
        languageSelected.value = [];
}
</script>

<template>
<div class="container fluid">
<div class="row">
<div class="col-sm-9">
<h3>Form Đăng Ký</h3>
<form @submit.prevent="register">
<div class="mb-3 mt-3">
<label for="fullName">Họ Tên:</label>
<input type="text" class="form-control" v-model="fullName"
placeholder="Nhập đầy đủ họ tên">
<p v-if="fullNameError" style="color: red;">{{ fullNameError }}</p>
</div>
<div class="mb-3">
<label for="email">Email:</label>
<input type="email" class="form-control" v-model="email"
placeholder="Nhập email">
<p v-if="emailError" style="color: red;">{{ emailError }}</p>
</div>
<div class="mb-3">
<label for="password">Mật khẩu:</label>
<input type="password" class="form-control" v-model="password"
placeholder="Nhập mật khẩu">
<p v-if="passwordError" style="color: red;">{{ passwordError }}</p>
</div>
<div class="mb-3">
<label for="dOb">Sinh Nhật:</label>
<input type="date" class="form-control" v-model="dOb">
<p v-if="dObError" style="color: red;">{{ dObError }}</p>
</div>
<div class="mb-3">
    <label class="form-label">Giới tính:</label>
    <div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="genderSelected" value="Nam">
            <label class="form-check-label">Nam</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="genderSelected" value="Nữ">
            <label class="form-check-label">Nữ</label>
        </div>
    </div>
</div>
<div class="mb-3 text-center">
    <label class="form-label d-block">Ngôn ngữ:</label>
    <div class="d-inline-block text-start"> 
        <div v-for="lang in language" :key="lang.key" class="form-check mb-1">
            <input class="form-check-input" type="checkbox" :id="lang.key" :value="lang.label" v-model="languageSelected">
            <label class="form-check-label" :for="lang.key">
                {{ lang.label }}
            </label>
        </div>
    </div>
</div>
<button type="submit" class="btn btn-primary">Đăng ký</button>
</form>
</div>
<div class="col-sm-3 border-start ps-4">
        <h4>Thông tin đã đăng ký:</h4>
        <div v-if="isRegistered">
        <p><strong>Họ tên:</strong> {{ fullName }}</p>
        <p><strong>Email:</strong> {{ email }}</p>
        <p><strong>Ngày sinh:</strong> {{ dOb }}</p>
        <p><strong>Giới tính:</strong> {{ genderSelected }}</p>
        <p><strong>Ngôn ngữ:</strong> {{ languageSelected.join(', ') }}</p>
        <button @click="goBack" class="btn btn-primary">Nhập lại</button>
        </div>
        <div v-else><p>Chưa có thông tin đăng ký ...</p></div>
</div>
</div>
</div>
</template>

<style>
</style>