<template>
  <v-app-bar elevation="0" color="blue-grey lighten-5 accent-4">
    <v-toolbar-title></v-toolbar-title>

    <v-spacer></v-spacer>

    <v-row class="mr-2 flex-row flex-grow-0" justify="end">
      <v-col justify="end" class="d-inline-flex">
        <v-menu bottom min-width="300px" rounded offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon x-large v-on="on">
              <v-avatar color="blue-grey darken-4" size="48">
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar color="blue-grey darken-4">
                  <span class="white--text text-h5">{{ user.initials }}</span>
                </v-avatar>
                <h3>{{ user.fullName }}</h3>
                <p class="text-caption mt-1">
                  {{ user.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded text> Edit Account </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded text> Disconnect </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </v-col>
      <v-col class="flex" min-width="" justify="center" align="center">
        {{ user.fullName }}
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    user: {
      initials: "",
      fullName: "",
      email: "",
    },
  }),
  mounted() {
    this.user.fullName = this.$store.state.fullName;
    this.user.initials = this.$store.state.fullName[0];
    this.user.email = this.$store.state.email;
  },
};
</script>
<style>
.v-toolbar__content,
.v-toolbar__extension {
  padding: 0;
}
</style>
