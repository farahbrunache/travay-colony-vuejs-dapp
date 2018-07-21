import { RouteConfig } from 'vue-router/types/router';

export const TransactionModalRoutes: RouteConfig[] = [
  {
    path:      '/transactionModal',
    component: () => import(/* webpackChunkName: "transactionModal" */ './TransactionModal/TransactionModal.vue').then(m => m.default),
  },
];
