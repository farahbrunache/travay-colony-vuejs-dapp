<template>
  <div :class="$style.wallet">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>Wallet</h1>
        </vue-grid-item>

          <vue-tab-group>
          <vue-tab-item title="Balance" icon="far fa-credit-card">
              <!-- <vue-data-table :header="header" :data="transaction-data.json" :show-search="false" :page="1" :max-rows="10" @click="action" /> -->
          </vue-tab-item>
          <vue-tab-item title="Transactions" icon="fas fa-list">
              <!-- <vue-data-table :header="header" :data="transaction-data.json" :show-search="false" :page="1" :max-rows="10" @click="action" /> -->
          </vue-tab-item>
          </vue-tab-group>


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
import VueTabGroup from '../../shared/components/VueTabGroup/VueTabGroup.vue';
import VueTabItem from '../../shared/components/VueTabGroup/VueTabItem/VueTabItem.vue';
import VueDataTable from '../../shared/components/VueDataTable/VueDataTable.vue';
import VueDataTableHeader from '../../shared/components/VueDataTable/VueDataTableHeader/VueDataTableHeader.vue';
import VueDataTableRow from '../../shared/components/VueDataTable/VueDataTableRow/VueDataTableRow.vue';
import VueDataTableSearch from '../../shared/components/VueDataTable/VueDataTableSearch/VueDataTableSearch.vue';

export default {
  metaInfo: {
    title: 'Wallet'
  },
  components: {
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow,
    VueTabGroup,
    VueTabItem,
    VueDataTable,
    VueDataTableHeader,
    VueDataTableRow,
    VueDataTableSearch
  },
  methods: {
    ...mapActions('wallet', ['increment', 'decrement'])
  },
  computed: {
    ...mapGetters('wallet', ['count', 'incrementPending', 'decrementPending'])
  },
  prefetch: (options: IPreLoad) => {
    return options.store.dispatch('wallet/increment');
  }
};
</script>


<style lang="scss" module>
@import '../../shared/styles';

.wallet {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
