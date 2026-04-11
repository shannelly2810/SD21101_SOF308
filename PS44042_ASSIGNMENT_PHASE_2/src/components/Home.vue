<script setup>
import {useRouter} from 'vue-router';
const router = useRouter();
const goToAbout =()=>{
    router.push('/about');
};
</script>
<template >
    <div>
        <h3>This is Home</h3>
        <button @click="goToAbout">Learn more about us</button>
    </div>
</template>