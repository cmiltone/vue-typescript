<template>
  <v-navigation-drawer
    id="drawer"
    v-model="drawer"
    :dark="dark"
    :right="$vuetify.rtl"
    :src="drawerImage ? image : ''"
    :mini-variant.sync="mini"
    mini-variant-width="80"
    app
    width="260"
  >
    <template v-if="drawerImage" #img="props">
      <v-img :key="image" :gradient="gradient" v-bind="props" />
    </template>

    <div class="px-2">
      <drawer-header />

      <v-divider class="mx-3 mb-2" />

      <list :items="items" />
    </div>

    <template #append>
      <div class="pa-4 text-center">
        <v-btn class="text-none mb-4" color="white" href="#" small text>
          Policy
        </v-btn>

        <v-btn block class="text-none" color="secondary" href="#">
          <v-icon left> mdi-package-up </v-icon>

          Footer
        </v-btn>
      </div>
    </template>

    <div class="pt-12" />
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";

import { navLinks } from "./nav-links";

export default Vue.extend({
  name: "Drawer",
  components: {
    DrawerHeader: () =>
      import(
        /* webpackChunkName: "drawer-header" */
        "./DrawerHeader.vue"
      ),
    List: () =>
      import(
        /* webpackChunkName: "list" */
        "./List.vue"
      ),
  },
  data: () => ({
    dark: false,
    items: navLinks,
    gradient: "rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)",
    drawerImage: true,
    image:
      "https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg",
  }),
  computed: {
    mini: {
      get() {
        return this.$store.getters.mini;
      },
      set() {
        this.$store.dispatch("toggleMini");
      },
    },
    drawer: {
      get() {
        return this.$store.getters.drawer;
      },
      set(val) {
        this.$store.dispatch("setDrawer", val);
      },
    },
  },
  // computed: {
  //   ...get("user", ["dark", "gradient", "image"]),
  //   ...get("app", ["items", "version"]),
  //   ...sync("app", ["drawer", "drawerImage", "mini"]),
  // },
});
</script>

<style lang="sass">
#drawer
  .v-list-item
    margin-bottom: 8px

  .v-list-item::before,
  .v-list-item::after
    display: none

  .v-list-group__header__prepend-icon,
  .v-list-item__icon
    margin-top: 12px
    margin-bottom: 12px
    margin-left: 4px

  &.v-navigation-drawer--mini-variant
    .v-list-item
      justify-content: flex-start !important
</style>
