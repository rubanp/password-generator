<script setup lang="ts">
// code...
</script>

<template>
  <div class="character-slider-container">
    <label for="characterLength">Character Length</label>
    <input type="range" name="characterLength" id="characterLength" min="5" max="20">
  </div>
</template>

<style scoped>
.character-slider-container {
  width: 100%;
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
  height: 0.5rem;
}

/* Thumb Styling */
/* ============= */

input[type=range]::-webkit-slider-thumb {
  appearance: none;
}


</style>
