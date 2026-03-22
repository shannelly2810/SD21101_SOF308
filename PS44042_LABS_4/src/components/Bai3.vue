<script setup>
import { ref } from 'vue';

const greeting = ref('Hi there kind stranger !'); 
const buttonTitle = ref('< Click here to see the miracle >');
const changeGreeting = () => {
  greeting.value = 'My name is Phat - What yours ?'; 
  buttonTitle.value = '!Content successfully changed!';
};
</script>
<template>
  <div class="container mt-5 p-4 border rounded bg-light">
    <h1 class="text-primary">{{ greeting }}</h1>

    <button 
      v-bind:title="buttonTitle" 
      @click="changeGreeting" 
      class="btn btn-success mt-3"
    >
    v Click here to let us know each other better v
    </button>
  </div>
</template>