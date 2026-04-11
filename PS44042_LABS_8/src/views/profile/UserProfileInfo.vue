<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { USERS } from "../../data/users";
const route = useRoute();
const user = computed(() => USERS.find((u) => u.id === route.params.userId));
</script>

<template>
  <article>
    <h3>User Profile Info</h3>
    <template v-if="user">
      <p>Ho ten: {{ user.fullName }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Vai tro: {{ user.role }}</p>
    </template>
    <p v-else>Khong co du lieu user.</p>
  </article>
</template>
