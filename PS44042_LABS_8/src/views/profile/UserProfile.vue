<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { USERS } from "../../data/users";
const route = useRoute();
const userId = computed(() => route.params.userId);
const user = computed(() => USERS.find((u) => u.id === userId.value));
</script>

<template>
  <section>
    <h2>User Profile</h2>
    <p v-if="user"><strong>{{ user.fullName }}</strong> ({{ user.id }})</p>
    <p v-else>Khong tim thay user voi ID: {{ userId }}</p>
    <nav v-if="user">
      <RouterLink :to="{ name: 'UserProfileInfo', params: { userId } }">Info</RouterLink>
      |
      <RouterLink :to="{ name: 'UserProfileSettings', params: { userId } }">Settings</RouterLink>
    </nav>
    <RouterView />
  </section>
</template>
