<script setup>
import { ref } from 'vue';

const studentList = ref([
    { name: 'Trần Thị Hải Bích', score: 9.6, DoB: '1998-01-01' },
    { name: 'Phan Ngạ Kim Lan', score: 5.9, DoB: '1999-09-21' }
]);

const student = ref({
    name: '',
    score: null,
    DoB: ''
});

const isEditing = ref(false);
const editingIndex = ref(null); 

function submitForm() {
    if (isEditing.value) {
        studentList.value[editingIndex.value] = { ...student.value };
        isEditing.value = false;
        editingIndex.value = null;
    } else {
        studentList.value.push({ ...student.value });
    }
    resetForm();
}

function editStudent(index) {
    student.value = { ...studentList.value[index] };
    isEditing.value = true;
    editingIndex.value = index;
}

function deleteStudent(index) {
    if (confirm("Bạn có chắc chắn muốn xóa?")) {
        studentList.value.splice(index, 1);
    }
}

function resetForm() {
    student.value = { name: '', score: null, DoB: '' };
    isEditing.value = false;
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
}

</script>

<template>
<div class="container-fluid mt-4">
    <div class="row">
        <div class="col-md-4 border-end">
            <div class="card p-3 shadow-sm">
                <h3 class="text-primary">{{ isEditing ? 'Cập Nhật Thông Tin' : 'Thêm Học Sinh' }}</h3>
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label class="form-label">Họ Tên:</label>
                        <input type="text" class="form-control" v-model="student.name" required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Điểm Số:</label>
                        <input type="number" class="form-control" min="0" max="10" step="0.1" v-model.number="student.score" required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Ngày Sinh:</label>
                        <input type="date" class="form-control" v-model="student.DoB" required />
                    </div>
                    <div class="d-flex gap-2">
                        <button type="submit" class="btn" :class="isEditing ? 'btn-warning' : 'btn-success'">
                            {{ isEditing ? 'Cập Nhật' : 'Thêm Mới' }}
                        </button>
                        <button v-if="isEditing" type="button" class="btn btn-secondary" @click="resetForm">Hủy</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="col-md-8 px-4">
            <h2 class="text-danger mb-4">Danh Sách Học Sinh</h2>
            <div class="table-responsive">
                <table class="table table-hover align-middle">
                    <thead class="table-dark">
                        <tr>
                            <th>Họ và tên</th>
                            <th>Điểm</th>
                            <th>Ngày Sinh</th>
                            <th class="text-center">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in studentList" :key="index">
                            <td>{{ item.name }}</td>
                            <td>
                                <span class="badge" :class="item.score >= 5 ? 'bg-success' : 'bg-danger'">
                                    {{ item.score }}
                                </span>
                            </td>
                            <td>{{ formatDate(item.DoB) }}</td>
                            <td class="text-center">
                                <button class="btn btn-sm btn-outline-warning me-2" @click="editStudent(index)">Sửa</button>
                                <button class="btn btn-sm btn-outline-danger" @click="deleteStudent(index)">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>