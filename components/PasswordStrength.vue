<script setup>
const props = defineProps(['strength'])

const backgroundColor = computed(() => {
  if (props.strength === 1) return 'var(--red)';
  if (props.strength === 2) return 'var(--orange)';
  if (props.strength === 3) return 'var(--yellow)';
  if (props.strength === 4) return 'var(--green)';
})

const strengthLevel = computed(() => {
  if (props.strength === 0) return '';
  if (props.strength === 1) return 'TOO WEAK!';
  if (props.strength === 2) return 'WEAK';
  if (props.strength === 3) return 'MEDIUM';
  if (props.strength === 4) return 'STRONG';
})

function style(order) {
  return reactive({
    backgroundColor: props.strength >= order ? backgroundColor : null,
    border: props.strength < order ? 'solid 1px var(--white)': null
  })
}

</script>


<template>
  <div class="password-strength-container">
    <p class="body-regular">STRENGTH</p>
    <div>
      <p class="heading-large">{{ strengthLevel }}</p>
      <div class="strength-indicator">
        <div :style="style(1)"></div>
        <div :style="style(2)"></div>
        <div :style="style(3)"></div>
        <div :style="style(4)"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.password-strength-container {
  padding: 1.25rem 2rem;
  width: 100%;
  background-color: var(--black);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 83px;
}

.password-strength-container > div {
  display: flex;
  align-items: center;
  gap: 1em;
}

.body-regular {
  color: var(--light-grey);
}

.heading-large {
  color: var(--white);
  text-transform: uppercase;
}

.strength-indicator {
  display: flex;
  gap: 0.5em;
  align-items: center;
}

.strength-indicator > div {
  width: 10px;
  height: 28px;
}
</style>
