<template>
  <Story title="Password Strength">
    <Variant title="Default">
      <PasswordStrength></PasswordStrength>
    </Variant>
    <Variant title="Too Weak">
      <PasswordStrength strength="1"></PasswordStrength>
    </Variant>
    <Variant title="Weak">
      <PasswordStrength strength="2"></PasswordStrength>
    </Variant>
    <Variant title="Medium">
      <PasswordStrength strength="3"></PasswordStrength>
    </Variant>
    <Variant title="Strong">
      <PasswordStrength strength="4"></PasswordStrength>
    </Variant>
  </Story>
</template>
