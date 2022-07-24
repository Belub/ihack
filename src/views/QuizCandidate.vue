<template>
  <div>
    <!--<v-card class="mb-4">
            <v-card-text>
                <v-select v-model="steps" :items="[2, 3, 4, 5, 6]" label="# of steps"></v-select>
            </v-card-text>
        </v-card>-->
    <h1 class="mb-5">{{ nameVacancy }}</h1>
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
          <v-text-field
            label="First name"
            v-model="first_name"
            hide-details="auto"
          ></v-text-field>
          <v-text-field label="Last name" v-model="last_name"></v-text-field>
          <v-text-field label="Email" v-model="email"></v-text-field>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card>
            Select your professional skills
            <v-card-text style="width: 810px">
              <v-row align="center">
                <v-checkbox
                  v-model="ansImp.IMPORTANT_SKILL_1"
                  :label="priorities[0]"
                  :value="ansImp.IMPORTANT_SKILL_1"
                ></v-checkbox>
              </v-row>
              <v-row align="center">
                <v-checkbox
                  v-model="ansImp.IMPORTANT_SKILL_2"
                  :label="priorities[1]"
                  :value="ansImp.IMPORTANT_SKILL_2"
                ></v-checkbox>
              </v-row>
              <v-row align="center">
                <v-checkbox
                  v-model="ansImp.IMPORTANT_SKILL_3"
                  :label="priorities[2]"
                  :value="ansImp.IMPORTANT_SKILL_3"
                ></v-checkbox>
              </v-row>
              <v-row align="center">
                <v-checkbox
                  v-model="ansImp.MINOR_SKILL_1"
                  :label="priorities[3]"
                  :value="ansImp.MINOR_SKILL_1"
                ></v-checkbox>
              </v-row>
              <v-row align="center">
                <v-checkbox
                  v-model="ansImp.MINOR_SKILL_2"
                  :label="priorities[4]"
                  :value="ansImp.MINOR_SKILL_2"
                ></v-checkbox>
              </v-row>
            </v-card-text>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="4">
          Expirience with {{ grade3 }}
          <v-radio-group v-model="expirience">
            <v-radio :label="`Dont have`" :value="'NO_EXPERIENCE'"></v-radio>
            <v-radio
              :label="`1- expirience`"
              :value="'LESS_ONE_YEAR'"
            ></v-radio>
            <v-radio
              :label="`1+ year expirience`"
              :value="'ONE_THREE_YEARS'"
            ></v-radio>
            <v-radio
              :label="`3+ year expirience`"
              :value="'THREE_FIVE_YEARS'"
            ></v-radio>
            <v-radio
              :label="`5+ year expirience`"
              :value="'MORE_FIVE_YEARS'"
            ></v-radio>
          </v-radio-group>
        </v-stepper-content>
        <v-stepper-content step="3">
          Expirience with {{ grade4 }}
          <v-radio-group v-model="expirienceTheor">
            <v-radio :label="`Don't know`" :value="'NOTHING'"></v-radio>
            <v-radio :label="`Know in theory`" :value="'THEORETICAL'"></v-radio>
            <v-radio :label="`Used one time`" :value="'USED_ONCE'"></v-radio>
            <v-radio :label="`Used often`" :value="'USED_OFTEN'"></v-radio>
            <v-radio :label="`Expert`" :value="'EXPERT'"></v-radio>
          </v-radio-group>
        </v-stepper-content>
        <v-stepper-content step="5">
          How can you please us?
          <v-card>
            <v-card-text style="width: 810px">
              <v-row align="center">
                <v-checkbox
                  v-model="ansAdd.ADDITIONAL_SKILL_1"
                  :label="criteries[0]"
                  :value="ansAdd.ADDITIONAL_SKILL_1"
                ></v-checkbox>
              </v-row>
              <v-row align="center">
                <v-checkbox
                  v-model="ansAdd.ADDITIONAL_SKILL_2"
                  :label="criteries[1]"
                  :value="ansAdd.ADDITIONAL_SKILL_2"
                ></v-checkbox>
              </v-row>
              <v-row align="center">
                <v-checkbox
                  v-model="ansAdd.ADDITIONAL_SKILL_3"
                  :label="criteries[2]"
                  :value="ansAdd.ADDITIONAL_SKILL_3"
                ></v-checkbox>
              </v-row>
              <v-row align="center">
                <v-checkbox
                  v-model="ansAdd.ADDITIONAL_SUPER_SKILL"
                  :label="criteries[3]"
                  :value="ansAdd.ADDITIONAL_SUPER_SKILL"
                ></v-checkbox>
              </v-row>
              <v-row align="center">
                <v-checkbox
                  v-model="ansAdd.ADDITIONAL_TEST_SKILL_1"
                  :label="criteries[4]"
                  :value="ansAdd.ADDITIONAL_TEST_SKILL_1"
                ></v-checkbox>
              </v-row>
              <v-row align="center">
                <v-checkbox
                  v-model="ansAdd.ADDITIONAL_TEST_SKILL_2"
                  :label="criteries[5]"
                  :value="ansAdd.ADDITIONAL_TEST_SKILL_2"
                ></v-checkbox>
              </v-row>
            </v-card-text>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="6">
          Send your CV
          <v-file-input multiple label="File input"></v-file-input>
          <v-textarea
            filled
            name="input-7-4"
            label="Comments"
            v-model="comments"
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
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="text-h5"> Thank you!. </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: ["index"],
  data() {
    return {
      e1: 1,
      steps: 6,
      first_name: null,
      last_name: null,
      email: null,
      nameVacancy: null,
      priorities: [],
      criteries: [],
      grade3: null,
      comments: null,
      grade4: null,
      checkbox4: null,
      dialog: false,
      ansImp: {
        IMPORTANT_SKILL_1: false,
        IMPORTANT_SKILL_2: false,
        IMPORTANT_SKILL_3: false,
        MINOR_SKILL_1: false,
        MINOR_SKILL_2: false,
      },
      ansAdd: {
        ADDITIONAL_SKILL_1: false,
        ADDITIONAL_SKILL_2: false,
        ADDITIONAL_SKILL_3: false,
        ADDITIONAL_SUPER_SKILL: false,
        ADDITIONAL_TEST_SKILL_1: false,
        ADDITIONAL_TEST_SKILL_2: false,
      },
      expirienceTheor: "NOTHING",
      expirience: "NO_EXPERIENCE",
      radioGroup: 1,
      res: {},
    };
  },

  mounted() {
    // fetch req
    axios
      .post("http://localhost:8000/api/respond-to-vacancy", {
        VACANCY_ID: this.$route.params.id,
      })
      .then((r) => {
        console.log("r: ", r);
        this.res = r.data;

        this.priorities = [
          this.res.IMPORTANT_SKILL_1,
          this.res.IMPORTANT_SKILL_2,
          this.res.IMPORTANT_SKILL_3,
          this.res.MINOR_SKILL_1,
          this.res.MINOR_SKILL_2,
        ];

        this.criteries = [
          this.res.ADDITIONAL_SKILL_1,
          this.res.ADDITIONAL_SKILL_2,
          this.res.ADDITIONAL_SKILL_3,
          this.res.ADDITIONAL_SUPER_SKILL,
          this.res.ADDITIONAL_TEST_SKILL_1,
          this.res.ADDITIONAL_TEST_SKILL_2,
        ];

        this.nameVacancy = data.VACANCY_NAME;
        this.ansImp.IMPORTANT_SKILL_1 = this.res.IMPORTANT_SKILL_1;
        this.ansImp.IMPORTANT_SKILL_2 = this.res.IMPORTANT_SKILL_2;
        this.ansImp.IMPORTANT_SKILL_3 = this.res.IMPORTANT_SKILL_3;
        this.ansImp.MINOR_SKILL_1 = this.res.MINOR_SKILL_1;
        this.ansImp.MINOR_SKILL_2 = this.res.MINOR_SKILL_2;

        this.ansAdd.ADDITIONAL_SKILL_1 = this.res.ADDITIONAL_SKILL_1;
        this.ansAdd.ADDITIONAL_SKILL_2 = this.res.ADDITIONAL_SKILL_2;
        this.ansAdd.ADDITIONAL_SKILL_3 = this.res.ADDITIONAL_SKILL_3;
        this.ansAdd.ADDITIONAL_SUPER_SKILL = this.res.ADDITIONAL_SUPER_SKILL;
        this.ansAdd.ADDITIONAL_TEST_SKILL_1 = this.res.ADDITIONAL_TEST_SKILL_1;
        this.ansAdd.ADDITIONAL_TEST_SKILL_2 = this.res.ADDITIONAL_TEST_SKILL_2;

        this.priorities = this.res.NEED_EXPERIENCE_SKILL;
        this.expirienceTheor = this.res.NEED_PROFESSIONALISM_SKILL;
      });

    console.log("this.res: ", this.res);
    const index = this.$route.params.id;
    const vacancy = this.$store.state.companies[0].vacancy[index];

    const data = {
      COMPANY_NAME: "COMPANY_NAME",
      VACANCY_NAME: vacancy.name,

      IMPORTANT_SKILL_1: this.res.ADDITIONAL_SKILL_1,
      IMPORTANT_SKILL_2: vacancy.priorities[1],
      IMPORTANT_SKILL_3: vacancy.priorities[2],
      MINOR_SKILL_1: vacancy.priorities[3],
      MINOR_SKILL_2: vacancy.priorities[4],

      NEED_PROFESSIONALISM_SKILL: this.expirience,
      NEED_EXPERIENCE_SKILL: this.expirienceTheor,

      ADDITIONAL_SKILL_1: vacancy.criteries[0],
      ADDITIONAL_SKILL_2: vacancy.criteries[1],
      ADDITIONAL_SKILL_3: vacancy.criteries[2],
      ADDITIONAL_SUPER_SKILL: vacancy.criteries[3],
      ADDITIONAL_TEST_SKILL_1: vacancy.criteries[4],
      ADDITIONAL_TEST_SKILL_2: vacancy.criteries[5],
    };

    /*
    const answerCandidate = {
      IMPORTANT_SKILL_1: false,
      IMPORTANT_SKILL_2: "JS",
      IMPORTANT_SKILL_3: "SQL",
      MINOR_SKILL_1: "YII-2",
      MINOR_SKILL_2: "Bitrix",
    };
    */
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
      // console.log('vacancy: ', vacancy);
      // this.$store.commit('setVacancy', vacancy);
      //this.$emit('close');

      const ans = this.ansImp;
      const and = this.ansAdd;

      const data = {
        VACANCY_ID: this.$route.params.id,

        IMPORTANT_SKILL_1: ans.IMPORTANT_SKILL_1,
        IMPORTANT_SKILL_2: ans.IMPORTANT_SKILL_2,
        IMPORTANT_SKILL_3: ans.IMPORTANT_SKILL_3,
        MINOR_SKILL_1: ans.MINOR_SKILL_1,
        MINOR_SKILL_2: ans.MINOR_SKILL_2,

        NEED_PROFESSIONALISM_SKILL: this.expirienceTheor,
        NEED_EXPERIENCE_SKILL: this.expirience,
        EXPERIENCE_SKILL_COMMERCE: true,

        ADDITIONAL_SKILL_1: and.ADDITIONAL_SKILL_1,
        ADDITIONAL_SKILL_2: and.ADDITIONAL_SKILL_2,
        ADDITIONAL_SKILL_3: and.ADDITIONAL_SKILL_3,
        ADDITIONAL_SUPER_SKILL: and.ADDITIONAL_SUPER_SKILL,
        ADDITIONAL_TEST_SKILL_1: and.ADDITIONAL_TEST_SKILL_1,
        ADDITIONAL_TEST_SKILL_2: and.ADDITIONAL_TEST_SKILL_2,

        NAME: this.first_name,
        SURNAME: this.last_name,
        EMAIL: this.email,
        COMMENT: this.comments,
        CANDIDATE_CV: null,
      };

      console.log("data: ", data);
      axios
        .post("http://localhost:8000/api/create-candidate-response", data)
        .then((r) => console.log(r));
      this.dialog = true;
    },
  },
};
</script>
<style></style>
