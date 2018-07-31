<template>
  <div :class="[$style.SectionFour, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <h2>{{ $t('App.sectionFour.blockTitle' /* How Does Travay Work? */) }}</h2>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body class="vuePanelBody">
              <ol>
                <li>{{ $t('App.sectionFour.bullet1' /* Register by signing in */) }}</li>
                
                <li>{{ $t('App.sectionFour.bullet2' /* Find a job your want and click "claim" */) }}</li>

                <li>{{ $t('App.sectionFour.bullet3' /* When work is complete, upload your proof of work and click "complete job" */) }}</li>

                <li>{{ $t('App.sectionFour.bullet4' /* Your Job Manager will approve work and issue payment */) }}</li>
              </ol>
              <p>{{ $t('App.sectionFour.paragraph' /* Find a job, claim it with no experience needed! */) }}</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '../../shared/components/VueGrid/VueGrid.vue';
import VueGridItem from '../../shared/components/VueGridItem/VueGridItem.vue';
import VuePanel from '../../shared/components/VuePanel/VuePanel.vue';
import VuePanelBody from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
import VueGridRow from '../../shared/components/VueGridRow/VueGridRow.vue';

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

.SectionFour {
  display: block;
  text-align: center;
  // @include background-gradient($brand-dark-primary, $brand-primary, -31deg);

  :global {
    .vuePanelBody {
      text-align: left;
      overflow: hidden;

      ol {
        margin-top: $space-unit * 5;
        padding: 0 0 0 $space-unit * 2;

        li {
          margin-bottom: $space-unit * 2;
        }
      }
    }
  }

  @include media(tabletPortrait) {
    :global {
      .vuePanel {
        width: 50%;
        margin-left: 25%;
      }
    }
  }

  @include media(tabletLandscape) {
    :global {
      .vuePanel {
        width: 33.3333333%;
        margin-left: 33.3333333%;
      }
    }
  }
}
</style>
