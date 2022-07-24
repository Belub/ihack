import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state() {
    return {
      role: null,
      fullName: null,
      email: null,
      firstPage: true,
      showWelcome: true,
      dev: false,
      companies: [],
      currentCompany: {},
    };
  },
  mutations: {
    setRole(state, role) {
      state.role = role;
    },
    setFullName(state, name) {
      state.fullName = name;
    },
    setEmail(state, email) {
      state.email = email;
    },
    setCompany(state, company) {
      console.log("company: ", company);
      state.companies.push(company);
    },
    setVacancy(state, vacancy) {
      console.log("vacancy: ", vacancy);
      state.companies[vacancy.index].vacancy.push(vacancy);
    },
    setDev(state, bool) {
      state.dev = bool;
    },
    setCurrentCompany(state, company) {
      state.currentCompany = company;
    },
  },
  actions: {},
  modules: {},
});
