import { RouteConfig } from 'vue-router/types/router';

export const CreateJobRoutes: RouteConfig[] = [
  {
    path:      '/createJob',
    component: () => import(/* webpackChunkName: "createJob" */ './CreateJob/CreateJob.vue').then(m => m.default),
  },
];
