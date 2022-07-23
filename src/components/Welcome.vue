<template>
  <v-app id="inspire">
    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <div class="text-center">
          <v-bottom-sheet v-model="sheet" inset>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="dark" dark v-bind="attrs" v-on="on">
                CHOOSE YOUR ROLE
              </v-btn>
            </template>
            <v-list>
              <v-subheader>Open in</v-subheader>
              <v-list-item
                v-for="tile in tiles"
                :key="tile.title"
                @click="goToSteps(tile.title)"
              >
                <v-list-item-avatar>
                  <v-avatar size="40px" tile>
                    <v-icon size="30px">mdi-{{ tile.name }}</v-icon>
                  </v-avatar>
                </v-list-item-avatar>
                <v-list-item-title>{{ tile.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-bottom-sheet>
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "Welcome",
  data: () => ({
    sheet: false,
    tiles: [
      { name: "glass-wine", title: "HR" },
      { name: "glass-mug-variant", title: "Developer" },
    ],
  }),
  methods: {
    goToSteps(role) {
      this.$store.commit("setRole", role);
      this.$emit("goNextPage");
    },
  },
};
</script>
<style lang=""></style>
