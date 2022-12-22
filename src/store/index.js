import { createStore } from "vuex";

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
  };
};
export const mutations = {
  LOGIN_USER(state) {
    state.isLoggedIn = true;
  },
};
const store = createStore({
  state,
  mutations,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
