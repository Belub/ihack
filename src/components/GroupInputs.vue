<template lang="">
  <div>
    <v-card-text>
      <v-row align="center">
        <v-text-field v-model="criteries[0]" label="New skill">
          <v-icon slot="append" color="green"> 15% </v-icon>
        </v-text-field>
      </v-row>
      <v-row align="center">
        <v-text-field v-model="criteries[1]" label="New skill"
          ><v-icon slot="append" color="green"> 15% </v-icon></v-text-field
        >
      </v-row>
      <v-row align="center">
        <v-text-field v-model="criteries[2]" label="New skill"
          ><v-icon slot="append" color="green"> 15% </v-icon></v-text-field
        >
      </v-row>
      <v-row align="center">
        <v-text-field v-model="criteries[3]" label="New skill"
          ><v-icon slot="append" color="green"> 15% </v-icon></v-text-field
        >
      </v-row>
      <v-row align="center">
        <v-text-field v-model="criteries[4]" label="New skill"
          ><v-icon slot="append" color="red"> 0% </v-icon></v-text-field
        >
      </v-row>
      <v-row align="center">
        <v-text-field v-model="criteries[5]" label="New skill"
          ><v-icon slot="append" color="red"> 0% </v-icon></v-text-field
        >
      </v-row>
    </v-card-text>
  </div>
</template>
<script>
export default {
  props: ["criteries"],
};
</script>
<style lang=""></style>
