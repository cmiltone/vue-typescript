<template>
  <v-btn class="ml-3 mr-4" elevation="1" fab small @click="setMini">
    <v-icon>
      {{ mini ? "mdi-format-list-bulleted" : "mdi-dots-vertical" }}
    </v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DrawerToggle",
  computed: {
    mini() {
      return this.$store.getters.mini;
    },
  },
  methods: {
    setMini() {
      this.$store.dispatch("toggleMini");
    },
  },
});
</script>
