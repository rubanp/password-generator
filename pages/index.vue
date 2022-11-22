<script setup lang="ts">
</script>

<template>
  <div class="main-container">
    <h1 class="heading-medium">Password Generator</h1>
    <PasswordDisplay password="!Lmv;67m.565"/>
    <PasswordGenerator />
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
}

h1 {
  color: var(--light-grey);
}
</style>
