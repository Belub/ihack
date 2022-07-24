<template>
  <div>
    <div v-if="!createNewWindow">
      <h1 class="ma-5">Company Overview</h1>
      <v-card class="mx-auto d-flex flex-row-reverse" width="98%" outlined>
        <v-card-actions>
          <v-container max-width="300">
            <iframe
              width="560"
              height="315"
              :src="result"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-container>
        </v-card-actions>
        <v-container class="d-flex flex-column">
          <h2>{{ company.name }}</h2>
          <h4>{{ company.description }}</h4>
        </v-container>
      </v-card>
      <h2 class="ma-3 mb-1">Vacancies</h2>
      <v-card-actions> </v-card-actions>
      <v-container v-if="!createNewWindow" class="d-flex ml-0">
        <v-card
          v-for="(vacancy, index) in vacancies"
          :key="index"
          class="mb-10 mr-10"
          style="width: 300px"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                {{ vacancy.VACANCY_NAME }}
              </v-list-item-title>
            </v-list-item-content>

            <v-avatar rounded-lg tile size="80" color="green">LOGO</v-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text @click="startTest(vacancy.ID)">
              Start Test
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </div>
    <div v-if="createNewWindow">
      <StepCreateVacancy
        @close="
          createNewWindow = !createNewWindow;
          getVacancies();
        "
        :index="$route.params.id"
      />
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import axios from "axios";

export default {
  components: {
    StepCreateVacancy: defineAsyncComponent(() =>
      import("../components/StepCreateVacancy.vue")
    ),
  },
  data: () => ({
    createNewWindow: false,
    company: {},
    result: "",
    link: null,
    candidateLink: null,
    vacancies: [],
  }),
  mounted() {
    this.company = this.$store.state.currentCompany;
    this.link = this.$store.state.currentCompany.link;
    this.loadURL();
    this.getVacancies();
  },
  methods: {
    getVacancies() {
      axios
        .get(
          `http://localhost:8000/api/show-vacancies/${this.$route.params.id}`
        )
        .then((r) => {
          this.vacancies = r.data;
        });
    },
    loadURL() {
      const youtubeEmbedTemplate = "https://www.youtube.com/embed/";
      const url = this.link.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      console.log("url", url);
      const YId =
        undefined !== url[2] ? url[2].split(/[^0-9a-z_/\\-]/i)[0] : url[0];
      console.log("YId", YId);
      if (YId === url[0]) {
        console.log("not a youtube link");
      } else {
        console.log("it's  a youtube video");
      }
      const topOfQueue = youtubeEmbedTemplate.concat(YId);
      console.log("topOfQueue", topOfQueue);
      this.result = topOfQueue;
    },
    createVacancy() {
      this.createNewWindow = !this.createNewWindow;
    },
    overview(index) {
      this.$router.push(`/dashboard/vacancy/${index}`);
    },
    generateLink(index) {
      // //var result = "";
      // var characters =
      //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      // var charactersLength = characters.length;
      // for (var i = 0; i < 20; i++) {
      //   //result += characters.charAt(
      //     //Math.floor(Math.random() * charactersLength)
      //   );
      // }

      const link = `http://localhost:8080/invite/${index}`;
      this.candidateLink = link;
    },
    startTest(index) {
      console.log("index: ", index);
      this.$router.push(`/test/${index}`);
    },
  },
};
</script>
<style></style>
