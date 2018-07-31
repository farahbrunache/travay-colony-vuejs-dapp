<template>
  <div :class="[$style.SectionTwo, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <h2>{{ $t('App.sectionTwo.blockTitle' /* Receive Instant Payments */) }}</h2>
        </vue-grid-item>
        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <i class="far fa-money-bill-alt" />
              <h3>{{ $t('App.sectionTwo.blockHeader' /* Jobs Paid in Cryptocurrency */) }}</h3>
              <p>{{ $t('App.sectionTwo.blockText' /* Cryptocurrency Payment = Instant Access to Your Money. And wealth creation. */) }}</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <!-- <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <i class="fas fa-briefcase" />
              <h3>Citizen Empowerment</h3>
              <p>Everyday citizens are skilled and able to fill the gaps - Travay empowers them to do so, rewarding them economically.</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item> -->

        <!-- <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <i class="fas fa-thumbs-up" />
              <h3>Career Building</h3>
              <p>Citizens are rewarded with payment for their work, and have the opportunity to build a resume and a reputation.</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item> -->
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

.SectionTwo {
  display: block;
  text-align: center;

  i {
    display: inline-block;
    font-size: $font-size-h1;
    margin-top: $space-unit;
  }

  @include background-gradient($brand-accent, $brand-light-primary, -135deg);
}
</style>
