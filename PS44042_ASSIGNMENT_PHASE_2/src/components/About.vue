<script setup>
import { computed } from 'vue';
import { useRoute,useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
const search = computed({
    get(){return route.query.search??''},
    set(search){router.replace({query:{search}})}
});
</script>
<template >
    <div>
        <h3>This is About</h3>
        <label>
            Search: <input v-model.trim()="search" type="text" maxlength="20" />
        </label>
        <h3>{{ search }}</h3>
    </div>
</template>