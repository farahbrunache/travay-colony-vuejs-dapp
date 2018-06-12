<template>
  <div :class="$style.privacyAndTerms">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>PrivacyAndTerms</h1>
          <p>We don't sell your information.</p>
        </vue-grid-item>

      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { IPreLoad } from "../../../server/isomorphic";
import VueGrid from "../../shared/components/VueGrid/VueGrid";
import VueGridItem from "../../shared/components/VueGridItem/VueGridItem";
import VueButton from "../../shared/components/VueButton/VueButton";
import VueGridRow from "../../shared/components/VueGridRow/VueGridRow";

export default {
  metaInfo: {
    title: "PrivacyAndTerms"
  },
  components: {
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow
  },
  methods: {
    ...mapActions("privacyAndTerms", ["increment", "decrement"])
  },
  computed: {
    ...mapGetters("privacyAndTerms", [
      "count",
      "incrementPending",
      "decrementPending"
    ])
  },
  prefetch: (options: IPreLoad) => {
    return options.store.dispatch("privacyAndTerms/increment");
  }
};
</script>


<style lang="scss" module>
@import "../../shared/styles";

.privacyAndTerms {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
