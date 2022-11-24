<script setup>
const characters = ref(12);
</script>

<template>
  <div class="character-slider-container">
    <div>
      <label for="characterLength" class="body-regular">Character Length</label>
      <p class="heading-large">{{ characters }}</p>
    </div>
      <input type="range" name="characterLength" id="characterLength" min="5" 
        max="20" v-model="characters" class="focus-toggle">
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
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;
}

/* Track Styling */
/* ============= */

/* Chrome, Safari, Opera, and Edge Chromium */
input[type="range"]::-webkit-slider-runnable-track {
  background: var(--black);
  height: 0.5rem;
}

/* Firefox */
input[type="range"]::-moz-range-track {
  background: var(--black);
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
  outline: none;
}
</style>
