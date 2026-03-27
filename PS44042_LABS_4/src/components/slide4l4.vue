<script setup>
import {ref} from "vue";
const count = ref(0);
const increment = () => { 
  count.value++; 
  styleData.value='font-size:'+count.value+'rem';
};
const decrement = () => { 
  count.value--; 
  styleData.value='font-size:'+count.value+'rem'; 
  if(count.value<0){count.value=0;}
};
const reset = () => count.value=0;
const content = "Hellu";
const classname = ref("text-red");
const styleData = ref("font-size: 5rem;");
const changeClass = () => {
  if (classname.value==="text-red") {
    classname.value="text-blue";
  } else {
    classname.value="text-red";
  }
};
</script>
<template>
<div class="container-fluid mb-3 text-center">
    <h2 v-bind:class="classname" v-bind:style="styleData">Counter: {{ count }}</h2>
    <h2 v-html="content"></h2>
      <div class="btn-group mt-3">
        <button @click="decrement" class="btn btn-danger">-</button>
        <button @click="reset" class="btn btn-secondary">Reset</button>
        <button @click="increment" class="btn btn-success">+</button>
        <button @click="changeClass" class="btn btn-warning">Change color</button>        
      </div>
</div>
</template>
<style scoped>
.text-red{
  color:red;
}
.text-blue{
  color:blue;
}
</style>