import { RouteConfig } from 'vue-router/types/router';

export const JobRoutes: RouteConfig[] = [
  {
    path:      '/job',
    component: () => import(/* webpackChunkName: "job" */ './Job/Job.vue').then(m => m.default),
  },
];
