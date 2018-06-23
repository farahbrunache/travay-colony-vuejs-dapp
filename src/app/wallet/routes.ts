import { RouteConfig } from 'vue-router/types/router';

export const WalletRoutes: RouteConfig[] = [
  {
    path:      '/wallet',
    component: () => import(/* webpackChunkName: "wallet" */ './Wallet/Wallet.vue').then(m => m.default),
  },
];
