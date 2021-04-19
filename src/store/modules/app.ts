import { Module } from "vuex";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const app: Module<any, any> = {
  state: {
    mini: false,
  },
  getters: {
    mini: (state) => state.mini,
  },
  mutations: {
    SET_MINI(state) {
      state.mini = !state.mini;
    },
  },
  actions: {
    toggleMini(context) {
      context.commit("SET_MINI");
    },
  },
};

export default app;
