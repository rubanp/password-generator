<script setup lang='ts'>
interface Props {
  password: string
}

const props = defineProps<Props>();

function copyPassword() {
  console.log('Password copied to clipboard');
}
</script>

<template>
  <div class="password-display-container">
    <h2 class="heading-large">{{ props.password }}</h2>
    <IconCopy @click="copyPassword"/>
  </div>
</template>

<style scoped>
.password-display-container {
  padding: 1.25em;
  background-color: var(--dark-grey);
  width: 540px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

h2 {
  color: var(--white);
}
</style>
