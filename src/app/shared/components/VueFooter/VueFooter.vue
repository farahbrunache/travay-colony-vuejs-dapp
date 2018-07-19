<template>
  <div :class="$style.vueFooter">
    <vue-grid>
      <vue-grid-row>

        <vue-grid-item>
          &copy; Copyright {{year}} Electric Feel<br>
          <router-link :to="'userGuide'">User Guide &amp; Glossary</router-link><br>
        </vue-grid-item>

      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '../VueGrid/VueGrid.vue';
import VueGridItem from '../VueGridItem/VueGridItem.vue';
import VueGridRow from '../VueGridRow/VueGridRow.vue';

export default {
  name: 'VueFooter',
  components: {
    VueGrid,
    VueGridItem,
    VueGridRow
  },
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss" module>
@import '../../styles';

.vueFooter {
  padding: $footer-padding;
  background: $footer-bg;
  // color: $footer-color;
  color: black;
  text-align: center;

  i {
    font-size: $font-size-h1;
    margin: 0 $space-unit * 2;
  }

  small {
    display: inline-block;
    margin: $space-unit * 2 0;
  }
}
</style>
