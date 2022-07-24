<template>
  <v-container fill-height fluid style="position: absolute">
    <v-card class="mx-auto" max-width="500">
      <v-card-title class="text-h6 font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
        <v-avatar
          color="primary lighten-2"
          class="subheading white--text"
          size="24"
          v-text="step"
        ></v-avatar>
      </v-card-title>

      <v-window v-model="step">
        <v-window-item :value="1">
          <v-card-text>
            <v-text-field label="Email" v-model="email"></v-text-field>
            <span class="text-caption grey--text text--darken-1">
              This is the email you will use to login to your Vuetify account
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="2">
          <v-card-text>
            <v-text-field
              label="First name"
              v-model="first"
              type="text"
            ></v-text-field>
            <v-text-field
              label="Last name"
              v-model="last"
              type="text"
            ></v-text-field>
            <span class="text-caption grey--text text--darken-1">
              Please enter your name for your account
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
          <div class="pa-4 text-center">
            <v-img
              class="mb-4"
              contain
              height="128"
              src="https://cdn.vuetifyjs.com/images/logos/v.svg"
            ></v-img>
            <h3 class="text-h6 font-weight-light mb-2">Welcome to Vuetify</h3>
            <span class="text-caption grey--text">Thanks for signing up!</span>
          </div>
        </v-window-item>
      </v-window>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn :disabled="step === 0" text @click="step-- && goToSteps(step)">
          Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn v-if="step !== 2" color="primary" depressed @click="step++">
          Next
        </v-btn>
        <v-btn v-else color="primary" depressed @click="submitData">
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    first: "",
    last: "",
    email: "",
    step: 1,
  }),
  mounted() {
    // console.log('this.$route.params.id: ', this.$route.params.id);
    // console.log('this.$route.params.id: ', this.$route.params.id > -1);
    // if (this.$route.params.id > -1) {
    // }
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        default:
          return "Create your account";
      }
    },
  },
  methods: {
    goToSteps(step) {
      if (step === 0) {
        this.$store.commit("setRole", null);
        this.$emit("first");
      }
    },
    submitData() {
      console.log("submitData, ", this.first);
      //sent to backend
      this.$store.commit(
        "setFullName",
        this.first.trim() + " " + this.last.trim()
      );
      this.$store.commit("setEmail", this.email.trim());
      if (this.first && this.last) {
        this.$emit("hides");
        setTimeout(() => {
          this.$router.push("/dashboard/index");
        }, 100);
      } else this.step--;
    },
  },
};
</script>
<style></style>
