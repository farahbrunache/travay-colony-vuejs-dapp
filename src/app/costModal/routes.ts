import { RouteConfig } from 'vue-router/types/router';

export const CostModalRoutes: RouteConfig[] = [
  {
    path:      '/costModal',
    component: () => import(/* webpackChunkName: "costModal" */ './CostModal/CostModal.vue').then(m => m.default),
  },
];
