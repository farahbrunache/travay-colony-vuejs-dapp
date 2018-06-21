<template>
  <div :class="$style.home">
    <stage />
    <fostering />
    <empowering-communities />
    <travay-experience />
    <how-does-it-work />
  </div>
</template>

<script lang="ts">
import Stage from '../Stage/Stage.vue';
import Fostering from '../Fostering/Fostering.vue';
import EmpoweringCommunities from '../EmpoweringCommunities/EmpoweringCommunities.vue';
import TravayExperience from '../TravayExperience/TravayExperience.vue';
import HowDoesItWork from '../HowDoesItWork/HowDoesItWork.vue';

export default {
  metaInfo: {
    title: 'travay: everyone at work.',
    meta: [
      {
        name: 'description',
        content: 'travay: Long Term Jobs Market for Developing Countries'
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW'
      },
      {
        name: 'keywords',
        content:
          'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app'
      },

      { name: 'og:url', content: 'https://travay-dapp.firebaseapp.com' },
      { name: 'og:site_name', content: 'travay' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en' },
      {
        name: 'og:title',
        content:
          'travay - Long-term jobs market for developing countries built with Colony'
      },
      {
        name: 'og:description',
        content:
          'travay - Long-term jobs market for developing countries built with Colony'
      },
      {
        name: 'og:image:url',
        content: 'https://travay-dapp.firebaseapp.com/logo.png'
      },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@farahbrunache' },
      { name: 'twitter:creator', content: '@farahbrunache' },
      {
        name: 'twitter:title',
        content:
          'travay - Long-term jobs market for developing countries built with Colony'
      },
      { name: 'twitter:url', content: 'https://travay-dapp.firebaseapp.com' },
      {
        name: 'twitter:image',
        content: 'https://travay-dapp.firebaseapp.com/logo.png'
      },
      {
        name: 'twitter:description',
        content:
          'travay - Long-term jobs market for developing countries built with Colony'
      }
    ]
  },
  components: {
    Stage,
    Fostering,
    EmpoweringCommunities,
    TravayExperience,
    HowDoesItWork
  },
  computed: {}
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
