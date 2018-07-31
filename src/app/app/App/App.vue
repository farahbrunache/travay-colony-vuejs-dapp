<template>
  <div id="app" :class="$style.app">
    <vue-notification-stack />
    <sign-in-modal />
    <vue-nav-bar>
      <ul :class="$style.nav">
        <li>
          <router-link to="/jobs" @click.native="navBarClose">
            <i class="fas fa-book" />
            <small>{{ $t('App.nav.jobs' /* Jobs */) }}</small>
          </router-link>
        </li>
        <li v-if="userId">
          <router-link to="/profile" @click.native="navBarClose">
            <i class="fas fa-user" />
            <small>{{ $t('App.nav.profile' /* Profile */) }}</small>
          </router-link>
        </li>
        <!-- <li v-if="userId">
          <router-link to="/wallet" @click.native="navBarClose">
            <i class="far fa-credit-card" />
            <small>{{ $t('App.nav.wallet' /* Wallet */) }}</small>
          </router-link>
        </li> -->
        <li>
          <a @click="signInClicked">
            <i class="fas fa-user-plus" />
            <small>{{ userId ? $t('App.nav.signout') : $t('App.nav.signin' /* Signin */) }}</small>
          </a>
        </li>
        <li>
          <a @click="localeSwitch('kr')">
            <i class="fas fa-flag" />
            <small>{{ $t('App.nav.kreyol' /* Haitian Creole */) }}</small>
          </a>
        </li>
        <!--<li>-->
          <!--<a @click="localeSwitch('fr')">-->
            <!--<i class="fas fa-flag" />-->
            <!--<small>{{ $t('App.nav.french' /* French */) }}</small>-->
          <!--</a>-->
        <!--</li>-->
        <li>
          <a @click="localeSwitch('en')">
            <i class="fas fa-flag" />
            <small>{{ $t('App.nav.english' /* English */) }}</small>
          </a>
        </li>
      </ul>
    </vue-nav-bar>

    <router-view :class="$style.content" />

    <vue-footer />
  </div>
</template>

<script lang="ts">
import { mapActions, mapMutations, mapGetters } from 'vuex';
import VueNavBar from '../../shared/components/VueNavBar/VueNavBar.vue';
import VueGrid from '../../shared/components/VueGrid/VueGrid.vue';
import VueGridItem from '../../shared/components/VueGridItem/VueGridItem.vue';
import VueFooter from '../../shared/components/VueFooter/VueFooter.vue';
import VueNotificationStack from '../../shared/components/VueNotificationStack/VueNotificationStack.vue';
import SignInModal from '../../signInModal/SignInModal/SignInModal.vue';
import { loadLocaleAsync } from '../../shared/plugins/i18n/i18n';
import { EventBus } from '../../shared/services/EventBus';

export default {
  components: {
    VueNavBar,
    VueGrid,
    VueGridItem,
    VueFooter,
    VueNotificationStack,
    SignInModal
  },
  computed: {
    ...mapGetters('signInModal', ['userId'])
  },
  methods: {
    ...mapActions('app', ['changeLocale']),
    ...mapActions('signInModal', ['openLoginModal', 'saveUserInStorage']),
    signInClicked() {
      this.navBarClose();
      this.openLoginModal();
    },
    localeSwitch(locale: string): void {
      loadLocaleAsync(locale).catch((error: Error) => console.log(error));

      this.changeLocale(locale);
      this.navBarClose();
    },
    navBarClose() {
      EventBus.$emit('navbar.close');
    }
  },
  created() {
    try {
      const userData = localStorage.getItem('userData');
      if (userData) {
        this.saveUserInStorage(JSON.parse(userData));
      }
    } catch (err) {
      console.log('err when trying to get user data from storage', err);
    }
  }
};
</script>

<style lang="scss" module>
@import '../../shared/styles';
@import '../../shared/styles/reset';
@import '../../shared/styles/typo';
@import '../../shared/styles/global';
@import url($google-font);

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}

.nav {
  margin: $space-unit 0 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  li {
    flex: 1;
    margin: $space-unit / 2;
    color: $text-color;
    flex-basis: $space-unit * 10;
    height: $space-unit * 10;
    background: $divider-color;
    cursor: pointer;

    a {
      padding: $space-unit;
      display: block;
      color: $text-color;
      text-align: center;
      font-size: 32px;
      text-decoration: none;

      small {
        font-size: 12px;
        display: block;
      }
    }
  }

  @include media(tabletLandscape) {
    li {
      opacity: 0.8;
      transition: opacity 250ms linear;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
