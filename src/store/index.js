import { createStore } from "vuex";
import getJobs from "@/api/getJobs";
export const LOGIN_USER = "LOGIN_USER";
export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const FETCH_JOBS = "FETCH_JOBS";
// const store = createStore({
//   state() {
//     return {
//       isLoggedIn: false,
//     };
//   },
//   mutations: {
//     LOGIN_USER(state) {
//       state.isLoggedIn = true;
//     },
//   },
//   strict: process.env.NODE_ENV !== "production",
// });

// export default store;

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
  };
};
export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
};
export const actions = {
  [FETCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings); //RECEIVE_JOBS(state,jobListings)
  },
};
const store = createStore({
  state,
  mutations,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
