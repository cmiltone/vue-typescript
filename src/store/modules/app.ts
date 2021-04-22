import { Module } from "vuex";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const app: Module<any, any> = {
  state: {
    mini: false,
    drawer: null,
    drawerImage: true,
  },
  getters: {
    mini: (state) => state.mini,
    drawer: (state) => state.drawer,
    drawerImage: (state) => state.drawerImage,
  },
  mutations: {
    SET_MINI(state) {
      state.mini = !state.mini;
    },
    SET_DRAWER(state, drawer) {
      state.drawer = drawer;
    },
  },
  actions: {
    toggleMini(context) {
      context.commit("SET_MINI");
    },
    setDrawer(context, drawer) {
      context.commit("SET_DRAWER", drawer);
    },
  },
};

export default app;
