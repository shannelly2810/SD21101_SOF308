<script setup>
import { reactive } from 'vue';

const state = reactive({
    count: 0,
    user: { name: 'John', age: 25 }
});

const state2 = reactive({
    fruits: ['Táo 🍎', 'Chuối 🍌', 'Nho 🍇']
});

const increment = () => {
    state.count++;
};

const addMango = () => {
    state2.fruits.push('Xoài 🥭');
};

const popFruit = () => {
    if (state2.fruits.length > 0) {
        state2.fruits.pop(); // Thêm dấu () vào đây
    } else {
        alert("Giỏ trái cây trống rỗng rồi!");
    }
};

const spliceMango = () => {
    const target = 'Xoài 🥭';
    const index = state2.fruits.indexOf(target); // Thêm chữ 's' vào fruits

    if (index !== -1) { // Dùng !== để kiểm tra xem có tìm thấy không
        state2.fruits.splice(index, 1);
    } else {
        alert("Trong giỏ không có Xoài 🥭 để xóa!");
    }
};
</script>

<template>
  <div class="container mt-4">
    <div>
        <h3>Count: {{ state.count }}</h3>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <h3>{{ state.user.name }} - {{ state.user.age }} tuổi</h3>
    </div>
    
    <hr>

    <div class="p-3 border rounded shadow-sm">
        <h4 class="text-success">Giỏ trái cây</h4>
        <div class="d-flex gap-2 mb-3">
            <button class="btn btn-success" @click="addMango">Thêm Xoài</button>
            <button class="btn btn-danger" @click="popFruit">Xóa quả cuối</button>
            <button class="btn btn-warning" @click="spliceMango">Xóa riêng Xoài</button>
        </div>
        
        <hr>
        <h5>Danh sách chi tiết:</h5>
        <ul>
            <li v-for="(fruit, index) in state2.fruits" :key="index">
                {{ fruit }}
            </li>
        </ul>

        <div class="alert alert-info">
            <strong>Dữ liệu mảng:</strong> {{ state2.fruits.join(', ') }}
        </div>
    </div>
  </div>
</template>