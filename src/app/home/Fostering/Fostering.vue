<template>
  <div :class="[$style.Fostering, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <h2>Fostering Economic and Social Mobility</h2>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <i class="far fa-money-bill-alt" />
              <h3>Economic Benefit</h3>
              <p>Travay provides a citizen driven, long-term jobs market, helping to provide to economic mobility.</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <i class="fas fa-users" />
              <h3>Community Benefit</h3>
              <p>Travay offers citizens full-time jobs, helping people to provide infrastructure and services for their own communities.</p>
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
import VueGridRow from '../../shared/components/VueGridRow/VueGridRow';
import VuePanel from '../../shared/components/VuePanel/VuePanel';
import VuePanelBody from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody';

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

.Fostering {
  display: block;
  text-align: center;

  i {
    display: inline-block;
    font-size: $font-size-h1;
    margin-top: $space-unit;
  }
}
</style>
