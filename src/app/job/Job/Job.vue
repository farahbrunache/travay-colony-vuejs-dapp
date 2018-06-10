<template>
  <div :class="$style.job">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>Job</h1>
        </vue-grid-item>

        <vue-grid-item fill>

        </vue-grid-item>
        <vue-grid-item fill>

        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import { mapActions, mapGetters } from 'vuex';
  import { IPreLoad }               from '../../../server/isomorphic';
  import VueGrid                    from '../../shared/components/VueGrid/VueGrid';
  import VueGridItem                from '../../shared/components/VueGridItem/VueGridItem';
  import VueButton                  from '../../shared/components/VueButton/VueButton';
  import VueGridRow                 from '../../shared/components/VueGridRow/VueGridRow';

  export default {
    metaInfo:   {
      title: 'Job',
    },
    components: {
      VueGrid,
      VueGridItem,
      VueButton,
      VueGridRow,
    },
    methods:    {
      ...mapActions('job', [
        'increment',
        'decrement',
      ]),
    },
    computed:   {
      ...mapGetters('job', ['count', 'incrementPending', 'decrementPending']),
    },
    prefetch:   (options: IPreLoad) => {
      return options.store.dispatch('job/increment');
    },
  };
</script>


<style lang="scss" module>
  @import "../../shared/styles";

  .job {
    margin-top: $nav-bar-height;
    min-height: 500px;
  }
</style>
