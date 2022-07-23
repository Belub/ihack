<template>
  <div class="d-flex flex-row">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-container
          class="d-flex flex-column align-center justify-center mx-auto"
        >
          <v-icon v-bind="attrs" v-on="on" class="v-icon__folder" size="170"
            >mdi-folder</v-icon
          >
          <h3 v-bind="attrs" v-on="on" class="mx-auto align-center">
            Relevant candidates
          </h3>
        </v-container>
      </template>
      <span>60%-100%</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-container
          class="d-flex flex-column align-center justify-center mx-auto"
        >
          <v-icon v-bind="attrs" v-on="on" class="v-icon__folder" size="170"
            >mdi-folder</v-icon
          >
          <h3 v-bind="attrs" v-on="on" class="mx-auto">Personal reserve</h3>
        </v-container>
      </template>
      <span>30%-59%</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-container
          class="d-flex flex-column align-center justify-center mx-auto"
        >
          <v-icon v-bind="attrs" v-on="on" class="v-icon__folder" size="170"
            >mdi-folder</v-icon
          >
          <h3 v-bind="attrs" v-on="on" class="mx-auto">Least suitable</h3>
        </v-container>
      </template>
      <span>0%-29%</span>
    </v-tooltip>
  </div>
</template>
<script>
export default {};
</script>
<style>
.v-icon__folder:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
