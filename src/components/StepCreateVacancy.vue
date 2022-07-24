<template>
  <div>
    <!--<v-card class="mb-4">
            <v-card-text>
                <v-select v-model="steps" :items="[2, 3, 4, 5, 6]" label="# of steps"></v-select>
            </v-card-text>
        </v-card>-->
    <h1 class="mb-5">Create vacancy</h1>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <template v-for="n in steps">
          <v-stepper-step
            :key="`${n}-step`"
            :complete="e1 > n"
            :step="n"
            editable
          >
            Step {{ n }}
          </v-stepper-step>

          <v-divider v-if="n !== steps" :key="n"></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <div v-case="1">
            <v-text-field
              v-model="nameVacancy"
              class="mb-5"
              label="Name vacancy"
              hide-details="auto"
            ></v-text-field>
          </div>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card>
            <v-card-text style="width: 810px">
              <v-row align="center">
                <v-text-field v-model="priorities[0]" label="New skill">
                  <v-icon slot="append" color="green"> 15% </v-icon>
                </v-text-field>
              </v-row>
              <v-row align="center">
                <v-text-field v-model="priorities[1]" label="New skill"
                  ><v-icon slot="append" color="green">
                    15%
                  </v-icon></v-text-field
                >
              </v-row>
              <v-row align="center">
                <v-text-field v-model="priorities[2]" label="New skill"
                  ><v-icon slot="append" color="green">
                    15%
                  </v-icon></v-text-field
                >
              </v-row>
              <v-row align="center">
                <v-text-field v-model="priorities[3]" label="New skill"
                  ><v-icon slot="append" color="red"> 0% </v-icon></v-text-field
                >
              </v-row>
              <v-row align="center">
                <v-text-field v-model="priorities[4]" label="New skill"
                  ><v-icon slot="append" color="red"> 0% </v-icon></v-text-field
                >
              </v-row>
            </v-card-text>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-select
            :items="[priorities[0], priorities[1], priorities[2]]"
            v-model="grade3"
            :menu-props="{ top: true, offsetY: true }"
            label="Grade"
          ></v-select>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-select
            :items="[priorities[0], priorities[1], priorities[2]]"
            v-model="grade4"
            :menu-props="{ top: true, offsetY: true }"
            label="Grade"
          ></v-select>

          <v-checkbox
            label="Real expirience"
            v-model="checkbox4"
            hide-details
            class="mt-0 mb-5"
          ></v-checkbox>
        </v-stepper-content>
        <v-stepper-content step="5">
          <v-card>
            <v-card-text style="width: 810px">
              <v-row align="center">
                <v-text-field v-model="criteries[0]" label="New skill">
                  <v-icon slot="append" color="green"> 5% </v-icon>
                </v-text-field>
              </v-row>
              <v-row align="center">
                <v-text-field v-model="criteries[1]" label="New skill"
                  ><v-icon slot="append" color="green">
                    5%
                  </v-icon></v-text-field
                >
              </v-row>
              <v-row align="center">
                <v-text-field v-model="criteries[2]" label="New skill"
                  ><v-icon slot="append" color="green">
                    5%
                  </v-icon></v-text-field
                >
              </v-row>
              <v-row align="center">
                <v-text-field v-model="criteries[3]" label="New skill"
                  ><v-icon slot="append" color="green">
                    5%
                  </v-icon></v-text-field
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
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="6">
          <v-textarea
            name="input-7-1"
            label="Relevant person"
            v-model="relevant"
          ></v-textarea>
          <v-textarea
            name="input-7-1"
            label="Personnel reserve"
            v-model="personnelReserve"
          ></v-textarea>
          <v-textarea
            name="input-7-1"
            label="Least Suitable"
            v-model="leastSuitable"
          ></v-textarea>
        </v-stepper-content>
        <v-container class="d-flex flex-row" fluid>
          <v-btn v-if="e1 != 6" color="primary" @click="nextStep(e1)">
            Continue
          </v-btn>
          <v-btn v-else color="primary" @click="submitForm()"> Submit </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-container>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import axios from "axios";
//const api = process.env.VUE_API_SERVER;
//console.log('api: ', api)

export default {
  props: ["index"],
  data() {
    return {
      e1: 1,
      steps: 6,
      nameVacancy: null,
      priorities: [],
      criteries: [],
      grade3: null,
      grade4: null,
      checkbox4: null,
      relevant: null,
      personnelReserve: null,
      leastSuitable: null,
    };
  },

  watch: {
    steps(val) {
      console.log("steps");
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
  },

  methods: {
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    },
    submitForm() {
      // const vacancy = {
      //     index: this.index,
      //     name: this.nameVacancy,
      //     priorities: this.priorities,
      //     criteries: this.criteries,
      //     grade3: this.grade3,
      //     grade4: this.grade4,
      //     relevant: this.relevant,
      //     personnelReserve: this.personnelReserve,
      //     leastSuitable: this.leastSuitable,
      // };

      axios.post(`http://localhost:8000/api/create-vacancy`, {
        COMPANY_ID: this.index,
        COMPANY_NAME: this.$store.state.currentCompany.name,
        VACANCY_NAME: this.nameVacancy,

        IMPORTANT_SKILL_1: this.priorities[0],
        IMPORTANT_SKILL_2: this.priorities[1],
        IMPORTANT_SKILL_3: this.priorities[2],
        MINOR_SKILL_1: this.priorities[3],
        MINOR_SKILL_2: this.priorities[4],

        NEED_PROFESSIONALISM_SKILL: this.grade3,
        NEED_EXPERIENCE_SKILL: this.grade4,

        ADDITIONAL_SKILL_1: this.criteries[0],
        ADDITIONAL_SKILL_2: this.criteries[1],
        ADDITIONAL_SKILL_3: this.criteries[2],
        ADDITIONAL_SUPER_SKILL: this.criteries[3],
        ADDITIONAL_TEST_SKILL_1: this.criteries[4],
        ADDITIONAL_TEST_SKILL_2: this.criteries[5],

        BEST_CANDIDATES_RESPONSE: this.relevant,
        RESERVE_CANDIDATES_RESPONSE: this.personnelReserve,
        WEAK_CANDIDATES_RESPONSE: this.leastSuitable,
      });

      // console.log('vacancy: ', vacancy);
      // this.$store.commit('setVacancy', vacancy);
      this.$emit("close");
    },
  },
};
</script>
<style></style>
