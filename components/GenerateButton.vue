<template>
  <button type="submit" class="body-regular">
    Generate
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path 
        d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 
        3.84z"/></svg>
  </button>
</template>

<style scoped>
button {
  width: 100%;
  background-color: var(--green);
  border: solid 1px var(--green);
  color: var(--black);
  padding: 1em;
  margin-top: 2em;
}

button:hover {
  background-color: transparent;
  color: var(--green);
}

svg {
  fill: var(--black);
}

button:focus-visible {
  outline: solid 1px var(--white);
  outline-offset: 0.5rem;
}

button:hover svg {
  fill: var(--green);
}
</style>
