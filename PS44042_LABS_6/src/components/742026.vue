<script setup>
import { ref } from 'vue';

const inputGrade = ref(null);
const resultGrade = ref(null);
const errorMessage = ref('');

const studentList = ref([
    { id: 'PS14301', name: 'Trần Văn Hoàng', score: 6.5, },
    { id: 'PS14302', name: 'Nguyễn Minh Triết', score: 8.2, },
    { id: 'PS14303', name: 'Lê Thị Hồng Hạnh', score: 9.5, },
    { id: 'PS14304', name: 'Phạm Quốc Bảo', score: 4.0, },
    { id: 'PS14305', name: 'Vũ Anh Tuấn', score: 7.8, },
    { id: 'PS14306', name: 'Đặng Thu Thảo', score: 1.5, },
    { id: 'PS14307', name: 'Hoàng Gia Bách', score: 10.0, },
    { id: 'PS14308', name: 'Bùi Tuyết Nhi', score: 5.5, },
    { id: 'PS14309', name: 'Ngô Quang Khải', score: 6.9, },
    { id: 'PS14310', name: 'Trương Mỹ Linh', score: 8.7, },
    { id: 'PS14311', name: 'Đỗ Văn Nam', score: 3.2, },
    { id: 'PS14312', name: 'Phan Thanh Trúc', score: 7.4, },
    { id: 'PS14313', name: 'Lý Hùng Dũng', score: 5.0, },
    { id: 'PS14314', name: 'Dương Ngọc Ánh', score: 9.2, },
    { id: 'PS14315', name: 'Tạ Minh Long', score: 2.8, },
    { id: 'PS14316', name: 'Trịnh Kim Chi', score: 6.1, },
    { id: 'PS14317', name: 'Võ Hoàng Yến', score: 8.0, },
    { id: 'PS14318', name: 'Lương Gia Huy', score: 4.7, },
    { id: 'PS14319', name: 'Cao Thùy Trang', score: 7.1, },
    { id: 'PS14320', name: 'Mai Văn Quyết', score: 5.9, },
    { id: 'PS14321', name: 'Hà Phương Thảo', score: 9.8, }
]);

const student = ref({
    id: '',
    name: '',
    score: null,
    performance:''
});

const isEditing = ref(false);
const editingIndex = ref(null);

const submitForm = () => {
    if (student.value.score === null || student.value.score < 0 || student.value.score > 10) {
        alert("Invalid Input! Score must be between 0.0 and 10.0");
        return; 
    }
    student.value.performance = performanceCheck(student.value.score);
    
    if (isEditing.value) {
        studentList.value[editingIndex.value] = { ...student.value };
        isEditing.value = false;
        editingIndex.value = null;
    } else {
        if (!student.value.id) {
        studentList.value.push({ ...student.value });
    }}
    resetForm();
};

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
    student.value = { id: '', name: '', score: null, performance: '' };
    isEditing.value = false;
    editingIndex.value = null;
}

const performanceCheck = (score) => {
    if (score === null || score === undefined) return 'N/A';
    if (score < 5) return 'Yếu';
    if (score < 6.5) return 'Trung bình';
    if (score < 8) return 'Khá';
    if (score < 9) return 'Giỏi';
    return 'Xuất sắc';
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
                            <input type="number" class="form-control" min="0" max="10" step="0.1"
                                v-model.number="student.score" required />
                        </div>
                        <div class="d-flex gap-2">
                            <button type="submit" class="btn" :class="isEditing ? 'btn-warning' : 'btn-success'">
                                {{ isEditing ? 'Cập Nhật' : 'Thêm Mới' }}
                            </button>
                            <button v-if="isEditing" type="button" class="btn btn-secondary"
                                @click="resetForm">Hủy</button>
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
                                <th>Học lực</th>
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
                                <td>{{performanceCheck(item.score)}}</td>
                                <td class="text-center">
                                    <button class="btn btn-sm btn-outline-warning me-2"
                                        @click="editStudent(index)">Sửa</button>
                                    <button class="btn btn-sm btn-outline-danger"
                                        @click="deleteStudent(index)">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>