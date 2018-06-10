import { RouteConfig } from 'vue-router/types/router';

export const JobsFilterRoutes: RouteConfig[] = [
  {
    path:      '/jobsFilter',
    component: () => import(/* webpackChunkName: "jobsFilter" */ './JobsFilter/JobsFilter.vue').then(m => m.default),
  },
];
