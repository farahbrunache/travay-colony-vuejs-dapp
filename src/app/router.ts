import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';
import { AppRoutes } from './app/routes';
import { HomeRoutes } from './home/routes';
import { ProfileRoutes } from './profile/routes';
import { JobsRoutes } from './jobs/routes';
import { JobRoutes } from './job/routes';
import { CreateJobRoutes } from './createJob/routes';
import { WalletRoutes } from './wallet/routes';
import { SignInModalRoutes } from './signInModal/routes';
import { AdminRoutes } from './admin/routes';
import { UserGuideRoutes } from './userGuide/routes';
import { TransactionModalRoutes } from './transactionModal/routes';

Vue.use(VueRouter);
Vue.use(Meta);

export const router: VueRouter = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    ...AppRoutes,
    ...HomeRoutes,
    ...ProfileRoutes,
    ...JobsRoutes,
    ...JobRoutes,
    ...CreateJobRoutes,
    ...WalletRoutes,
    ...SignInModalRoutes,
    ...AdminRoutes,
    ...UserGuideRoutes,
    ...TransactionModalRoutes
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return savedPosition || { x: 0, y: 0 };
  }
});
