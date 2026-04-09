<script setup>
import { ref , computed } from 'vue';
const performances = ref(['Yếu', 'Trung Bình', 'Khá', 'Giỏi']);
const selectedPerformance = ref('');

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

const performanceCheck = (score) => {
    if (score === null || score === undefined) return 'N/A';
    if (score < 5) return 'Yếu';
    if (score < 6.5) return 'Trung bình';
    if (score < 8) return 'Khá';
    if (score < 9) return 'Giỏi';
    return 'Xuất sắc';
}

const filteredStudents = computed(() => {
  if (!selectedPerformance.value) {
    return studentList.value;
  }
  return studentList.value.filter(student => {
    return performanceCheck(student.score) === selectedPerformance.value;
  });
});
</script>

<template>
    <div class="mb-3">
        <label for="performanceSelect" class="form-label">Chọn Học lực:</label>

        <select id="performanceSelect" class="form-select text-center" v-model="selectedPerformance" required>
            <option value="" disabled selected>-- Vui lòng chọn --</option>

            <option v-for="performance in performances" :key="index" :value="performance">
                {{ performance }}
            </option>
        </select>

        <p class="mt-2 text-muted" v-if="selectedPerformance">
            Bạn đã chọn: <strong>{{ selectedPerformance }}</strong>
        </p>
    </div>
    <h2 class="mb-4 text-primary">Student List</h2>
    <ul class="list-group shadow-sm">
        <li class="list-group-item" v-for="(student, index) in filteredStudents" :key="index">
            <h4>{{ student.id }} - {{ student.name }} - {{ student.score }} - {{ performanceCheck(student.score) }}</h4>
        </li>
    </ul>
</template>

<style scoped>
.posts {
    padding: 20px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 10px;
}

.highlighted {
    border: 2px solid lightgray;
}
</style>