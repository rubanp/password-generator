<script setup>
  const password = ref('')
</script>

<template>
  <div class="index-container">
    <h1 class="heading-medium">Password Generator</h1>
    <PasswordDisplay :password="password"/>
    <PasswordGenerator @password="(newPassword) => password = newPassword"/>
  </div>
</template>

<style scoped>
  .index-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }

  h1 {
    color: var(--light-grey);
  }
</style>
