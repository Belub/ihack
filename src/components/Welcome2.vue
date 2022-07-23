<template>
  <v-container fill-height fluid style="position: absolute">
    <v-row align="center" justify="center">
      <v-sheet class="mx-auto" elevation="0" max-width="800">
        <v-col align="center"> CHOOSE YOUR ROLE </v-col>
        <v-col align="center">
          <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-item :key="1" v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'blue-grey lighten-4' : 'blue-grey lighten-2'"
                class="ma-4"
                height="180"
                width="120"
                @click="toggle && goToSteps('hr')"
              >
                <v-row class="d-flex flex-column mt-1">
                  <v-col> HR </v-col>
                  <v-col>
                    <v-scale-transition>
                      <v-icon
                        color="dark"
                        size="55"
                        v-text="'mdi-magnify'"
                      ></v-icon>
                    </v-scale-transition>
                  </v-col>
                </v-row>
              </v-card>
            </v-slide-item>
            <v-slide-item :key="2" v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'blue-grey lighten-4' : 'blue-grey lighten-2'"
                class="ma-4"
                height="180"
                width="120"
                @click="toggle && goToSteps('dev')"
              >
                <v-row class="d-flex flex-column mt-1">
                  <v-col> Developer </v-col>
                  <v-col>
                    <v-scale-transition>
                      <v-icon
                        color="dark"
                        size="55"
                        v-text="'mdi-briefcase'"
                      ></v-icon>
                    </v-scale-transition>
                  </v-col>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
        <!--<v-expand-transition>
                        <v-sheet v-if="model != null" height="200" tile>
                            <v-row class="fill-height" align="center" justify="center">
                                <h3 class="text-h6">Selected {{ model }}</h3>
                            </v-row>
                        </v-sheet>
                    </v-expand-transition>-->
      </v-sheet>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Welcome2",
  data: () => ({
    model: null,
  }),
  methods: {
    goToSteps(role) {
      console.log("goNextPage");
      this.$store.commit("setRole", role);
      this.$emit("first");
    },
  },
};
</script>
<style></style>
