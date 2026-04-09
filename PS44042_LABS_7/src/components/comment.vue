<script setup>
import {ref,defineEmits} from 'vue';
const props = defineProps(['username']);
const emit = defineEmits(['logout']);
const commentText = ref('');
const comments = ref([]);

const commentSubmit = () => {
    if(commentText.value){
        comments.value.push({
            name:props.username,
            text:commentText.value
    });
    }
    commentText.value='';
}

const handleLogout = () => {
    emit('logout'); 
}
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-8">
        <h2>Bài viết</h2>
        <div class="card mb-4">
          <img src="../assets/images/1stArticle.jpg" class="card-img-top" alt="Hình ảnh" />
          <div class="card-body">
            <h3 class="card-title">8 loại rau củ quả giàu canxi</h3>
            <p class="card-text">
              Canxi là khoáng chất cần thiết đối với cơ thể người.
              Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất.
              Có 8 loại rau củ giàu canxi...
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-4 border-start ps-4">
        <h2>Bình luận</h2>
        <form @submit.prevent="commentSubmit">
          <div class="mb-3">
            <textarea 
              class="form-control" 
              rows="3" 
              v-model="commentText" 
              placeholder="Nhập bình luận của bạn">
            </textarea>
          </div>
          <button type="submit" class="btn btn-success w-100">Gửi bình luận</button>
        </form>

        <div v-if="comments.length" class="mt-4">
          <h5>Danh sách các bình luận:</h5>
          <ul class="list-group">
            <li v-for="(comment, index) in comments" :key="index" class="list-group-item">
              <strong>{{ comment.name }}</strong>: {{ comment.text }} 
            </li>
          </ul>
        </div>
        <div class="mt-5 border-top pt-3">
            <button @click="handleLogout" class="btn btn-outline-danger w-100">Đăng xuất</button>
        </div>
      </div>
    </div>
  </div>
</template>