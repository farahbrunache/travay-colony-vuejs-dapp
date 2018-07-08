<template>
  <div :class="$style.signInModal">
    <vue-modal :show="isOpen" @close="closeLoginModal">
      <vue-button warn @click="closeLoginModal">X</vue-button>
            <vue-grid>
      <vue-grid-row>

        <vue-grid-item fill>
          <h1>{{modalHeading}}</h1>
        </vue-grid-item>

        <vue-grid-item v-if="!userId" fill>
          <button @click="signInWithGoogle">
            <i class="fab fa-google"></i> Login with Google
          </button>
        </vue-grid-item>

        <vue-grid-item v-else fill>
        <button @click="signOut">
            <i class="fab fa-sign-out"></i> Sign Out
          </button>
        </vue-grid-item>

      </vue-grid-row>
    </vue-grid>
        <!--<vue-button primary @click.prevent.stop="$emit('sponsorSubmit', sponsorAmount)">Sponsor</vue-button>-->
    </vue-modal>
  </div>
</template>
<script lang="ts">
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { IPreLoad } from '../../../server/isomorphic';
import VueGrid from '../../shared/components/VueGrid/VueGrid.vue';
import VueGridItem from '../../shared/components/VueGridItem/VueGridItem.vue';
import VueButton from '../../shared/components/VueButton/VueButton.vue';
import VueGridRow from '../../shared/components/VueGridRow/VueGridRow.vue';
import VueModal from '../../shared/components/VueModal/VueModal.vue';
import firebase from 'firebase';
import db from '../../firebaseinit';

console.log('logging firebase', firebase, db);

export default {
  metaInfo: {
    title: 'SignInModal'
  },
  components: {
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow,
    VueModal
  },
  methods: {
    ...mapActions('signInModal', ['openLoginModal', 'closeLoginModal']),
    ...mapActions('signin', ['saveUserInStorage', 'logoutUser']),
    ...mapMutations('signin', ['SET_USER_DATA']),
    signInWithGoogle: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.closeLoginModal();
          this.updateUserData(result.user);
          console.log('user data!', result);
        })
        .catch(err => console.log(err));
    },
    signOut: function() {
      console.log('Signing user out');
      firebase
        .auth()
        .signOut()
        .then(res => {
          console.warn('USER SHOULD BE SIGNED OUT!', res);
          this.logoutUser();
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
        console.log('data in update, user data!', data);
        this.$router.push('/jobs');
      } catch (err) {
        console.error('error while getting user by uid', err);
      }
    }
  },
  computed: {
    ...mapGetters('signInModal', ['isOpen']),
    ...mapGetters('signin', ['userId']),
    modalHeading() {
      return this.userId ? 'Sign out' : 'Sign in';
    }
  },
  created() {
    console.log('In SignInModal', this.isOpen);
  }
};
</script>

<style lang="scss" module>
@import '../../shared/styles';
</style>
