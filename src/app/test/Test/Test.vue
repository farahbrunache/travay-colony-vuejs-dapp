<template>
  <div :class="$style.test">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>Test</h1>
        </vue-grid-item>

        <vue-grid-item fill>
          <vue-button
            :loading="incrementPending"
            @click='increment'
            accent>Increment +1
          </vue-button>
          <br/>
          <br/>
        </vue-grid-item>
        <vue-grid-item fill>
          <vue-button
            :loading="decrementPending"
            @click='decrement'
            primary>Decrement -1
          </vue-button>
          <h3>Count is {{ count }}</h3>
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
      title: 'Test',
    },
    components: {
      VueGrid,
      VueGridItem,
      VueButton,
      VueGridRow,
    },
    methods:    {
      ...mapActions('test', [
        'increment',
        'decrement',
      ]),
    },
    computed:   {
      ...mapGetters('test', ['count', 'incrementPending', 'decrementPending']),
    },
    prefetch:   (options: IPreLoad) => {
      return options.store.dispatch('test/increment');
    },
  };
</script>


<style lang="scss" module>
  @import "../../shared/styles";

  .test {
    margin-top: $nav-bar-height;
    min-height: 500px;
  }
</style>
