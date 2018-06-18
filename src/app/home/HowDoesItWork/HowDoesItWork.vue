<template>
  <div :class="[$style.HowDoesItWork, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <h2>How Does it Work?</h2>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body class="vuePanelBody">
              <ol>
                <li>New users create a profile for membership</li>
                <li>Members of the community post jobs</li>
                <li>Sponsors can contribute to job salaries</li>
                <li>Workers claim jobs</li>
                <li>They do work, and when work is approved they get paid</li>
                <li>Their wages can be cashed out, or saved in an investment wallet</li>
                <li>Workers earn reputation for a job well done, and get to build a resume</li>
                <li>Successful workers can post their own jobs for others to do</li>
              </ol>
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

.HowDoesItWork {
  display: block;
  text-align: center;
  @include background-gradient($brand-dark-primary, $brand-primary, -31deg);

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
