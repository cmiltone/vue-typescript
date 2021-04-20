<template>
  <v-list-group
    :color="gradient !== 1 ? 'white' : undefined"
    :group="genGroup(item.items)"
    :prepend-icon="item.icon"
    eager
    v-bind="$attrs"
  >
    <template v-slot:activator>
      <v-list-item-icon
        v-if="!item.icon && !item.avatar"
        class="text-caption text-uppercase text-center my-2 align-self-center"
        style="margin-top: 14px"
      >
        {{ title }}
      </v-list-item-icon>

      <v-list-item-avatar v-if="item.avatar">
        <v-img :src="item.avatar" />
      </v-list-item-avatar>

      <v-list-item-content v-if="item.title">
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </template>

    <template v-for="(child, i) in item.items">
      <list-group v-if="child.items" :key="`sub-group-${i}`" :item="child" />

      <list-item v-if="!child.items" :key="`child-${i}`" :item="child" />
    </template>
  </v-list-group>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ListGroup",
  components: {
    ListItem: () => import("./ListItem.vue"),
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    gradient: 0,
  }),
  methods: {
    genGroup(items: []): string {
      return items
        .reduce((acc: string[], cur: { to: string; items: [] }) => {
          if (!cur.to) return acc;

          const d = cur.items ? this.genGroup(cur.items) : cur.to.slice(1, -1);

          acc.push(d);

          return acc;
        }, [])
        .join("|");
    },
  },
  computed: {
    group(): string {
      return this.genGroup(this.item.items);
    },
    title() {
      const matches = this.item.title.match(/\b(\w)/g);

      return matches.join("");
    },
  },
});
</script>
