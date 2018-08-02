import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';
import {Store} from 'vuex';
import {sync} from 'vuex-router-sync';
import {VueRouter} from 'vue-router/types/router';
import {i18n} from './shared/plugins/i18n/i18n';
import {store} from './store';
import {router} from './router';
import {IState} from './state';
import App from './app/App/App.vue';
import {HttpService} from './shared/services/HttpService';
import {userRole} from './shared/directives/userRole.js';

router.beforeEach((to, from, next) => {
  if (Reflect.has(to.meta, 'adminOnly')) {
    if (this.value.role === '[4]') {
      next();
    } else {
      this.$router.push('/');
    }
    return;
  } else if (Reflect.has(to.meta, 'signedIn')) {
    /*if (!userID) {
      next('/')
      return
    }*/
  }
  next();
});

Vue.use(VeeValidate, {inject: false});
Vue.directive('userRole', userRole);

export interface IApp {
  app: Vue;
  router: VueRouter;
  store: Store<IState>;
  i18n: VueI18n;
}

export const createApp = (): IApp => {
  sync(store, router);

  HttpService.store = store;

  const app: Vue = new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  });

  return {app, router, store, i18n};
};
