<template>
  <div :class="$style.signin">
    <vue-grid>
      <vue-grid-row>

        <vue-grid-item fill>
          <h1>Signin</h1>
        </vue-grid-item>

        <vue-grid-item fill>
   <button @click="signInWithGoogle">
            <i class="fab fa-google"></i> Login with Google
          </button>
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
// import db, { firebaseStorage } from '../../firebaseInit';
import firebase from 'firebase';

export default {
  metaInfo: {
    title: 'Signin'
  },
  components: {
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow
  },
  watch: {
    content(newVal) {
      console.log('watcher', newVal);
    }
  },
  methods: {
    ...mapActions('signin', ['increment', 'decrement']),
    signInWithGoogle: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithRedirect(provider)
        .then(result => {
          this.user = result.user;
        })
        .catch(err => console.log(err));
    },
    signOut: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.user = null;
        })
        .catch(error => console.log(error));
    }
  },
  computed: {
    ...mapGetters('signin', ['count', 'incrementPending', 'decrementPending'])
  },
  prefetch: (options: IPreLoad) => {
    return options.store.dispatch('signin/increment');
  }
};
</script>


<style lang="scss" module>
@import '../../shared/styles';

.signin {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
