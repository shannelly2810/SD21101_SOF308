<script setup>
import {ref} from 'vue';

const jobInput=ref('')
const jobList=ref(['Cleaning the room','Wash the dishes','Mow the lawn'])

function jobSubmit(){
    if(jobInput.value){
        jobList.value.unshift(jobInput.value);
        jobInput.value='';
    }
}
</script>

<template>
<div class="container mt-4">
    <div class="card p-3 mb-4">
    <h2>Create a job</h2>
    <input 
    v-model.trim="jobInput"
    type="text"
    class="form form-control"
    placeholder="Enter your work of choice"
    @keyup.enter="jobSubmit" />
    <button class="btn btn-primary w-100 mt-1" @click="jobSubmit">Submit</button>
    </div>
    <hr>
    <h2 class="mb-4 text-primary">Newest Jobs</h2>
    <ul class="list-group shadow-sm">
        <li class="list-group-item d-flex justify-content-between align-items-center" 
            v-for="(job, index) in jobList" :key="index">
            <span><strong>{{ index + 1 }}</strong> - {{ job }}</span>
            <button class="btn btn-sm btn-danger" @submit.prevent="jobList.splice(index, 1)">Delete</button>
        </li>
    </ul>
</div>
<div>
    <input type="checkbox"
</div>
</template>

<style scoped>
</style>