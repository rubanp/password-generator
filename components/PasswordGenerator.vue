<script setup lang="ts">
// code...
</script>

<template>
  <div class="password-generator-container">
    <form action="">
      <CharacterSlider />
    </form>
  </div>
</template>

<style scoped>

.password-generator-container {
  padding: 1.25em;
  background-color: var(--dark-grey);
  width: 540px;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: flex-start;
}

form {
  width: 100%;
}

</style>
