<script setup lang='ts'>
interface Props {
  password: string
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <h2 class="heading-large">{{ props.password }}</h2>
    <img
      src="../assets/images/icon-copy.svg"
      alt="Copy password to clipboard"
      @click="$emit('copy')"
    >
  </div>
</template>

<style scoped>
div {
  padding: 1.25em;
  background-color: var(--dark-grey);
  width: 540px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

img {
  margin-left: auto;
  width: 21px;
  height: 24px;
  cursor: pointer;
}

h2 {
  color: var(--white);
}
</style>
