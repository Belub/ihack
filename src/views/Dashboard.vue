<template>
  <div>
    <v-navigation-drawer app>
      <Navigation />
    </v-navigation-drawer>
    <v-app-bar app>
      <NavBar />
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import Navigation from "../components/Navigation.vue";
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    Navigation,
    NavBar,
  },
};
</script>
<style></style>
