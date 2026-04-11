<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { USERS } from "../../data/users";
const route = useRoute();
const user = computed(() => USERS.find((u) => u.id === route.params.userId));
</script>

<template>
  <article>
    <h3>User Profile Settings</h3>
    <template v-if="user">
      <p>Theme hien tai: {{ user.theme }}</p>
      <p>Thong bao email: Bat</p>
      <p>Ngon ngu: Tieng Viet</p>
    </template>
    <p v-else>Khong co du lieu cai dat cho user nay.</p>
  </article>
</template>
