import { RouteConfig } from 'vue-router/types/router';

export const JobsRoutes: RouteConfig[] = [
  {
    path:      '/jobs',
    component: () => import(/* webpackChunkName: "jobs" */ './Jobs/Jobs.vue').then(m => m.default),
  },
];
