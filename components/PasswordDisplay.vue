<script setup>
const props = defineProps(['password']);
const placeholder = ref('P4$5W0rD!');
const checkVisible = ref(false);

function copyPassword() {
    const type = "text/plain";
    const blob = new Blob([props.password], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    navigator.clipboard.write(data)

    checkVisible.value = true;
    setTimeout(() => {
      checkVisible.value = false
    }, 2000)
}


</script>

<template>
  <div class="password-display-container">
    <h2 class="heading-large">
      {{ props.password }}
      <span v-if="!props.password">{{ placeholder }}</span>
    </h2>
    <IconCopy @click="copyPassword" v-if="!checkVisible"/>
    <IconCheckCopied v-if="checkVisible"/>
  </div>
</template>

<style scoped>
.password-display-container {
  padding: 1.25em;
  background-color: var(--dark-grey);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

h2 {
  color: var(--white);
}

span {
  color: var(--light-grey);
}
</style>
