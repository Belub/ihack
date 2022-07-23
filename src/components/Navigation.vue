<template>
  <v-card class="mx-auto rounded-0" height="100%" width="256">
    <v-navigation-drawer class="blue-grey lighten-5 accent-4">
      <v-avatar
        class="d-flex mx-auto mb-10 mt-2"
        color="purple lighten-4"
        size="150"
        >LOGO</v-avatar
      >
      <v-spacer></v-spacer>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="$router.push('/dashboard/index')"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Account", icon: "mdi-account-box" },
      ],
    };
  },
};
</script>
<style></style>
