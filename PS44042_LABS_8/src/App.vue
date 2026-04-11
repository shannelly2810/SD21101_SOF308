<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">Fpoly Lab 8</RouterLink>
      <div class="navbar-nav">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/blog">Blog</RouterLink>
        <RouterLink class="nav-link" to="/dashboard/overview">Dashboard</RouterLink>
      </div>
    </div>
  </nav>

  <RouterView /> 
  </template>

