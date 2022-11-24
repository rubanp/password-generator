<script setup>
const emit = defineEmits(['password']);

const allCharacters = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  symbols: ["(",")","\"","=","[","]","+","\'","`",":", 
    "{","}","<",">",",",".","£","#","~","^","!","@","|","_","\\","-","$","%","*","&",],
}

function parseForm(e) {
  const formData = new FormData(e.target);
  const data = [...formData.entries()];

  let length;
  let optionsObject = {
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  };

  data.forEach((option) => {
    if(option[0] === 'characterLength') {
      length = option[1];
    }
    if(option[0] === 'includeUppercaseLetters') {
      optionsObject.uppercase = true;
    }
    if(option[0] === 'includeLowercaseLetters') {
      optionsObject.lowercase = true;
    }
    if(option[0] === 'includeNumbers') {
      optionsObject.numbers = true;
    }
    if(option[0] === 'includeSymbols') {
      optionsObject.symbols = true;
    }
  })

  generatePassword(length, optionsObject);
}

function generatePassword(length, optionsObject) {
    let characters = '';

    for(const [key, value] of Object.entries(optionsObject)) {
      if (value) {
        characters += allCharacters[key].join('');
      }
    }

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
          name="includeUppercaseLetters"
          checked="true"/>
        <IncludeCheckbox
          label="Include Lowercase Letters"
          name="includeLowercaseLetters"
          checked="true"/>
        <IncludeCheckbox
          label="Include Numbers"
          name="includeNumbers"
          checked="true"/>
        <IncludeCheckbox
          label="Include Symbols"
          name="includeSymbols"/>
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
