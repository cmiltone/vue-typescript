<template>
  <v-app>
    <app-bar />

    <drawer />

    <v-main>
      <v-container fluid>
        <router-view :key="$route.path" />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Full",
  components: {
    AppBar: () =>
      import(
        /* webpackChunkName: "app-bar" */
        "@/components/drawer/AppBar.vue"
      ),
    Drawer: () =>
      import(
        /* webpackChunkName: "drawer" */
        "@/components/drawer/Drawer.vue"
      ),
    Footer: () =>
      import(
        /* webpackChunkName: "footer" */
        "@/components/Footer.vue"
      ),
  },
});
</script>
