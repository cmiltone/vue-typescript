<template>
  <v-app-bar
    id="app-bar"
    app
    absolute
    class="v-bar--underline"
    color="transparent"
    :clipped-left="$vuetify.rtl"
    :clipped-right="!$vuetify.rtl"
    height="70"
    flat
  >
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />

    <drawer-toggle class="hidden-sm-and-down" />

    <v-toolbar-title class="font-weight-light text-h5" v-text="name" />

    <v-spacer />

    <search class="hidden-sm-and-down" />

    <!-- <go-home /> -->

    <notifications />

    <account />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AppBar",
  components: {
    Account: () =>
      import(
        /* webpackChunkName: "account" */
        "./Account.vue"
      ),
    DrawerToggle: () =>
      import(
        /* webpackChunkName: "drawer-toggle" */
        "./DrawerToggle.vue"
      ),
    Notifications: () =>
      import(
        /* webpackChunkName: "notifications" */
        "./Notifications.vue"
      ),
    Search: () =>
      import(
        /* webpackChunkName: "search" */
        "./Search.vue"
      ),
  },
  computed: {
    name() {
      return this.$route.name;
    },
    // ...sync('app', [
    //   'drawer',
    //   'mini',
    // ]),
    // name: get('route/name'),
  },
  data: () => ({
    mini: false,
    drawer: null,
    // name: "route/name",
  }),
});
</script>
