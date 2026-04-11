<template>
  <nav>
    <p><strong>Current path:</strong>{{ $route.fullPath }}</p>
    <RouterLink to="/">Go to Home</RouterLink> | 
    <RouterLink to="/about">Go to About</RouterLink> </nav>
  <main>
    <RouterView/>
  </main>
</template>