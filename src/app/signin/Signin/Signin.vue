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

        <vue-grid-item fill>
   <button @click="signOut">
            <i class="fab fa-sign-out"></i> Sign Out
          </button>
        </vue-grid-item>

      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { IPreLoad } from '../../../server/isomorphic';
import VueGrid from '../../shared/components/VueGrid/VueGrid.vue';
import VueGridItem from '../../shared/components/VueGridItem/VueGridItem.vue';
import VueButton from '../../shared/components/VueButton/VueButton.vue';
import VueGridRow from '../../shared/components/VueGridRow/VueGridRow.vue';
import firebase from 'firebase';
import db from '../../firebaseinit';
console.log('logging firebase', firebase, db);
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
  data() {
    return {
      user: null
    };
  },
  watch: {
    content(newVal) {
      console.log('watcher', newVal);
    }
  },
  methods: {
    ...mapActions('signin', ['saveUserInStorage']),
    ...mapMutations('signin', ['SET_USER_DATA']),
    signInWithGoogle: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.updateUserData(result.user);
          console.log('user data!', result);
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
    },
    async updateUserData(user) {
      const userRef = db.doc(`users/${user.uid}`);
      const data = {
        uid: user.uid,
        email: user.email || null,
        displayName: user.displayName || null,
        photoURL: user.photoURL || null
      };
      try {
        const snapshot = await db
          .collection('users')
          .where('uid', '==', user.uid)
          .get();

        if (snapshot.empty) {
          const user = await db.collection('users').add(data);
          console.log('doc ref!', user);
        }

        this.user = data;
        this.saveUserInStorage(data);
        console.log('data in update user data!', data);
        this.$router.push('/jobs');
      } catch (err) {
        console.error('error while getting user by uid', err);
      }
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
