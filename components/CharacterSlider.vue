<script setup>
const characters = ref(12);
onMounted(() => {
  /* document.getElementById("characterLength").style.background = */ 
  /*   "linear-gradient(to right, var(--green) 0%, var(--green) 50%, var(--black) 50%, var(--black) 100%)"; */
  document.getElementById("characterLength").addEventListener('input', (e) => {
    let value = (e.target.value - e.target.min) / (e.target.max - e.target.min) * 100;
    e.target.style.background = `linear-gradient(to right, var(--green) 0%, var(--green) ${value}%, var(--black) ${value}%, var(--black) 100%)`;
  })

})
</script>

<template>
  <div class="character-slider-container">
    <div>
      <label for="characterLength" class="body-regular">Character Length</label>
      <p class="heading-large">{{ characters }}</p>
    </div>
      <input type="range" name="characterLength" id="characterLength" min="5" max="19" v-model="characters" class="focus-toggle">
  </div>
</template>

<style scoped>
.character-slider-container {
  width: 100%;
}

.character-slider-container div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
}

p {
  color: var(--green);
}

label {
  font-family: var(--primary-font);
  color: var(--white);
}

/* ============ */
/* Range Slider */
/* ============ */

/* Base Styles */

input[type=range] {
  appearance: none;
  width: 100%; /* Specific width is required for Firefox. */
  background: linear-gradient(to right, var(--green) 0%, var(--green) 50%, var(--black) 50%, var(--black) 100%);
  cursor: pointer;
}

/* Track Styling */
/* ============= */

/* Chrome, Safari, Opera, and Edge Chromium */
input[type="range"]::-webkit-slider-runnable-track {
  height: 0.5rem;
}

/* Firefox */
input[type="range"]::-moz-range-track {
  height: 8px;
}

/* Thumb Styling */
/* ============= */

/* Chrome, Safari, Opera, and Edge Chromium */
input[type=range]::-webkit-slider-thumb {
  appearance: none;
  height: 28px;
  width: 28px;
  background-color: var(--white);
  border-radius: 50%;
  border: solid 1px var(--white);
  margin-top: -10px;
}

/* Firefox */
input[type=range]::-moz-range-thumb {
  appearance: none;
  height: 28px;
  width: 28px;
  background-color: var(--white);
  border-radius: 50%;
  border: solid 1px var(--white);
  margin-top: -10px;
}

/* Focus Styles */
/* ============ */

/* Removes default focus */
input[type="range"]:focus-visible {
  outline: none;
}

/* Chrome, Safari, Opera, and Edge Chromium */
input[type="range"]:focus-visible::-webkit-slider-thumb {
  outline: 2px solid var(--green);
  outline-offset: 0.25rem;
}

/* Firefox */
input[type="range"]:focus-visible::-moz-range-thumb {
  outline: 2px solid var(--green);
  outline-offset: 0.25rem;
}

/* Hover Styles */
/* ============ */

/* Chrome, Safari, Opera, and Edge Chromium */
input[type=range]:hover::-webkit-slider-thumb, 
input[type=range]:active::-webkit-slider-thumb {
  background-color: var(--black);
  border: solid 3px var(--green);
}
</style>
