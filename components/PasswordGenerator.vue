<script setup>
const emit = defineEmits(['password']);

const strength = ref(0);

const allCharacters = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '012345678910',
  symbols: '()=[]+:{}<>,.£#~^!@|_-$%*&',
}

function parseForm(e) {
  const formData = new FormData(e.target);
  const data = [...formData.entries()];

  const { 1: length } = data.shift();
  const options = data.map((option) => {
    return option[0];
  })

  generatePassword(length, options);

  calculateStrength(length, options);

}

function generatePassword(length, options) {
    let characters = '';
    options.forEach((option) => {
        characters += allCharacters[option];
    })

    let newPassword = '';

    for ( let i = 0; i < length; i++ ) {
        newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    emit('password', newPassword)
}

function calculateStrength(length, options) {
  let newStrength;

  if (length === 0) {
    newStrength = 0;
  }

  if (length >= 1) {
    newStrength = 1;
  }

  if (length >= 4 && options.includes('numbers') || options.includes('symbols') && options.length >= 2) {
    newStrength = 2;
  }

  if (length >= 8 && options.includes('numbers') || options.includes('symbols') && options.length >= 3) {
    newStrength = 3;
  }

  if (length >= 12 && options.length === 4) {
    newStrength = 4;
  }

  strength.value = newStrength;
}

</script>

<template>
  <div class="password-generator-container">
    <form @submit.prevent="parseForm">
      <CharacterSlider />
      <div class="include-checkbox-wrapper">
        <IncludeCheckbox
          label="Include Uppercase Letters"
          name="uppercase"
          checked="true"/>
        <IncludeCheckbox
          label="Include Lowercase Letters"
          name="lowercase"
          checked="true"/>
        <IncludeCheckbox
          label="Include Numbers"
          name="numbers"
          checked="true"/>
        <IncludeCheckbox
          label="Include Symbols"
          name="symbols"/>
      </div>
      <PasswordStrength :strength="strength"/>
      <GenerateButton />
    </form>
  </div>
</template>

<style scoped>

.password-generator-container {
  padding: 2em;
  background-color: var(--dark-grey);
  width: 540px;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: flex-start;
}

.include-checkbox-wrapper {
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}

form {
  width: 100%;
}
</style>
