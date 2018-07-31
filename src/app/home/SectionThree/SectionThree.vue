<template>
  <div :class="[$style.SectionThree, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <h2>Travay Experience</h2>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <i class="fas fa-paste" />
              <h3>Job Postings</h3>
              <p>Community members and sponsors post jobs - ideally jobs that bring social good.</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <i class="fas fa-clipboard" />
              <h3>Worker Action</h3>
              <p>Workers claim jobs, perform the tasks, and get rewarded - financially and with career benefits.</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <i class="fas fa-home" />
              <h3>Community Benefit</h3>
              <p>The community benefits from the social good, the sponsor finds a reliable worker and the worker gets rewarded.</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '../../shared/components/VueGrid/VueGrid';
import VueGridItem from '../../shared/components/VueGridItem/VueGridItem';
import VuePanel from '../../shared/components/VuePanel/VuePanel';
import VuePanelBody from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody';
import VueGridRow from '../../shared/components/VueGridRow/VueGridRow';

export default {
  components: {
    VueGrid,
    VueGridItem,
    VuePanel,
    VuePanelBody,
    VueGridRow
  }
};
</script>

<style lang="scss" module>
@import '../../shared/styles';

.SectionThree {
  display: block;
  text-align: center;

  i {
    display: inline-block;
    font-size: $font-size-h1;
    margin-top: $space-unit;
  }
}
</style>
