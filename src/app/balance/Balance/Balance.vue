<template>
  <div :class="$style.balance">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>Balance</h1>
        </vue-grid-item>
      </vue-grid-row>
</vue-grid>
  </div>
</template>

<script lang="ts">
import { VueGrid } from "../shared/components/VueGrid/VueGrid.vue";

export default {
  metaInfo: {
    title: "Balance"
  },
  components: {
    ViewGrid
  },
  methods: {},
  computed: {}
};
</script>


<style lang="scss" module>
@import "../../shared/styles";

.balance {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
