<template>
  <div :class="$style.home">
    <stage
      :disable-particles="disableParticles" />
    <section-one />
    <section-two />
    <!-- <section-three /> -->
    <section-four />
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../Stage/Stage.vue';
import SectionOne from '../SectionOne/SectionOne.vue';
import SectionTwo from '../SectionTwo/SectionTwo.vue';
import SectionThree from '../SectionThree/SectionThree.vue';
import SectionFour from '../SectionFour/SectionFour.vue';
import { IState } from '../../state';

export default {
  metaInfo: {
    title: 'travay: opportunity for all.',
    meta: [
      {
        name: 'description',
        content: 'travay: Long-Term Jobs Market for Haiti'
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW'
      },
      {
        name: 'keywords',
        content: 'haiti, haitian, kreyol, travay, blockchain, colonyJS'
      },

      { name: 'og:url', content: 'travay.co' },
      { name: 'og:site_name', content: 'travay' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'kr' },
      {
        name: 'og:title',
        content: 'travay - Long-term jobs market of Haiti'
      },
      {
        name: 'og:description',
        content: 'travay - Long-term jobs market of Haiti'
      },
      {
        name: 'og:image:url',
        content: 'https://travay.co/logo.png'
      },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@farahbrunache' },
      { name: 'twitter:creator', content: '@farahbrunache' },
      {
        name: 'twitter:title',
        content: 'travay - opportunity for all.'
      },
      { name: 'twitter:url', content: 'https://travay.co' },
      {
        name: 'twitter:image',
        content: 'https://travay.co/logo.png'
      },
      {
        name: 'twitter:description',
        content: 'travay - opportunity for all.'
      }
    ]
  },
  components: {
    Stage,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour
  },
  computed: {
    ...mapState({
      disableParticles: (state: IState) =>
        state.app.config.features.disableParticles
    })
  }
};
</script>

<style lang="scss" module>
@import '../../shared/styles';

.home {
  h2 {
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
  }

  :global {
    .vuePanel {
      height: 100%;
    }

    .vueGridItem {
      margin-bottom: $space-unit * 2;
    }

    .featureSection {
      padding: 0;
    }
  }

  @include media(tabletLandscape) {
    :global {
      .featureSection {
        padding: $space-unit * 15 0;
      }
    }
  }
}
</style>
