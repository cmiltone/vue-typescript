<script lang="ts">
import { VHover, VListItem } from "vuetify/lib";
import Vue, { VNode } from "vue";

export default Vue.extend({
  name: "AppBarItem",

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render(h): VNode {
    return h(VHover, {
      scopedSlots: {
        default: ({ hover }) => {
          return h(
            VListItem,
            {
              attrs: this.$attrs,
              class: {
                "black--text": !hover,
                "white--text secondary elevation-12": hover,
              },
              props: {
                activeClass: "",
                dark: hover,
                link: true,
                ...this.$attrs,
              },
            },
            this.$slots.default
          );
        },
      },
    });
  },
});
</script>
