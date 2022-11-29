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
    width: 600px;
  }

  @media only screen and (max-width: 600px) {
    .index-container {
      width: 400px;
    }
  }

  @media only screen and (max-width: 450px) {
    .index-container {
      width: 95%;
    }
  }

  h1 {
    color: var(--light-grey);
  }
</style>
