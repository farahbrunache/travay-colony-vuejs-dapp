import { RouteConfig } from 'vue-router/types/router';

export const BalanceRoutes: RouteConfig[] = [
  {
    path:      '/balance',
    component: () => import(/* webpackChunkName: "balance" */ './Balance/Balance.vue').then(m => m.default),
  },
];
