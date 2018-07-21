<template>
  <div :class="$style.transactionModal">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>Transaction Modal</h1>
        </vue-grid-item>


      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { IPreLoad } from '../../../server/isomorphic';
import VueGrid from '../../shared/components/VueGrid/VueGrid.vue';
import VueGridItem from '../../shared/components/VueGridItem/VueGridItem.vue';
import VueButton from '../../shared/components/VueButton/VueButton.vue';
import VueGridRow from '../../shared/components/VueGridRow/VueGridRow.vue';

export default {
  metaInfo: {
    title: 'TransactionModal'
  },
  components: {
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow
  },
  methods: {
    ...mapActions('transactionModal', [])
  },
  computed: {
    ...mapGetters('transactionModal', [])
  },
  prefetch: (options: IPreLoad) => {}
};
</script>


<style lang="scss" module>
@import '../../shared/styles';

.transactionModal {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
