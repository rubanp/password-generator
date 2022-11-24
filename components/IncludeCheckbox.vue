<script setup>
const props = defineProps(['label', 'name', 'checked'])
const checked = ref(props.checked);

function toggleChecked() {
  checked.value = !checked.value;
}

</script>

<template>
  <div class="include-checkbox-container">
    <input type="checkbox" :name="props.name" :id="props.name" v-model="checked">
    <div class="checkbox" :class="{active: checked}" @click="toggleChecked"><IconCheck v-if="checked"/></div>
    <label class="body-regular" :for="props.name">{{ props.label }}</label>
    <div class="focus-div"></div>
  </div>
</template>

<style scoped>
.include-checkbox-container {
  display: flex;
  width: 100%;
  position: relative;
  z-index: 2;
}

input[type="checkbox"] {
  opacity: 0;
  height: 0;
  width: 0;
}

input[type="checkbox"],
.checkbox,
label {
  z-index: 3;
}

.focus-div {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

input:focus-visible ~ .focus-div {
  outline: solid 1px white;
  outline-offset: 0.5rem;
}

label {
  color: var(--white);
}

label:hover {
  cursor: pointer
}

.checkbox {
  height: 20px;
  width: 20px;
  border: solid 1px var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2em;
  padding-top: 1px;
  padding-left: 1px;
  margin-top: 1px;
}

.active {
  background-color: var(--green);
  border: var(--green);
}

.checkbox:hover {
  cursor: pointer;
  border-color: var(--green);
}
</style>
