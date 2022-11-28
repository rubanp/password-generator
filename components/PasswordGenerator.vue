<script setup>
const emit = defineEmits(['password']);

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
        <GenerateButton />
      </div>
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
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}

form {
  width: 100%;
}
</style>
