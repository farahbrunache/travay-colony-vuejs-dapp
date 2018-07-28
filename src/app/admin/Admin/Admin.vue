<template>
  <div :class="$style.admin">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>Admin</h1>
        </vue-grid-item>

        <vue-grid-item fill>
          test
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
    title: 'Admin'
  },
  components: {
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow
  },
  methods: {
    ...mapActions('admin', [])
  },
  computed: {
    ...mapGetters('admin', [])
  }
};
</script>


<style lang="scss" module>
@import '../../shared/styles';

.admin {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
