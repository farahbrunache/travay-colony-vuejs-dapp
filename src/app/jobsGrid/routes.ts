import { RouteConfig } from 'vue-router/types/router';

export const JobsGridRoutes: RouteConfig[] = [
  {
    path:      '/jobsGrid',
    component: () => import(/* webpackChunkName: "jobsGrid" */ './JobsGrid/JobsGrid.vue').then(m => m.default),
  },
];
