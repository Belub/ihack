<template>
  <div v-switch="step">
    <div v-case="1">
      <v-text-field
        label="Name vacancy"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
      <v-text-field label="Another input"></v-text-field>
    </div>
    <h2 v-case="2">Medium</h2>
    <h3 v-default>Default</h3>
  </div>
</template>
<script>
export default {
  name: "StepCreate",
  props: ["step"],
};
</script>
<style></style>
