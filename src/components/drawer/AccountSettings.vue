<template>
  <list :items="items" class="mb-n2" />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AccountSettings",
  components: {
    List: () =>
      import(
        /* webpackChunkName: "list" */
        "./List.vue"
      ),
  },
  data: () => ({
    items: [
      {
        title: "John Leider",
        icon: "mdi-vuetify",
        items: [
          {
            title: "My Profile",
          },
          {
            title: "Edit Profile",
          },
          {
            title: "Settings",
          },
        ],
      },
    ],
  }),
});
</script>
