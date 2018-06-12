<template>
  <div :class="$style.job">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>Job</h1>
        </vue-grid-item>


      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from "../../shared/components/VueGrid/VueGrid.vue";
import VueGridItem from "../../shared/components/VueGridItem/VueGridItem.vue";
import VueButton from "../../shared/components/VueButton/VueButton.vue";
import VueGridRow from "../../shared/components/VueGridRow/VueGridRow.vue";
import VuePagination from "../../shared/components/VuePagination/VuePagination.vue";
import VuePanel from "../../shared/components/VuePanel/VuePanel.vue";
import VuePanelHeader from "../../shared/components/VuePanel/VuePanelHeader/VuePanelHeader.vue";
import VuePanelBody from "../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue";
import VuePanelFooter from "../../shared/components/VuePanel/VuePanelFooter/VuePanelFooter.vue";
import axios from "axios";

export default {
  metaInfo: {
    title: "Job"
  },
  components: {
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow,
    VuePagination,
    VuePanel,
    VuePanelHeader,
    VuePanelBody,
    VuePanelFooter
  },
  methods: {},
  computed: {}
};
</script>


<style lang="scss" module>
@import "../../shared/styles";

.job {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
