<template>
  <v-app>
    <div v-if="showWelcome">
      <transition name="slide-fade">
        <Welcome v-if="firstPage" @first="firstPage = false" />
      </transition>
      <transition name="slide-fade">
        <Steps v-if="!firstPage" />
      </transition>
    </div>
  </v-app>
</template>

<script>
import Steps from "./Steps.vue";
import Welcome from "../components/Welcome2.vue";

export default {
  data() {
    return {
      firstPage: true,
      showWelcome: true,
    };
  },
  name: "App",
  components: {
    Welcome,
    Steps,
  },
};
</script>
<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(5px);
  opacity: 0;
}
</style>
