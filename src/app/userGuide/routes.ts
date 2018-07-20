import { RouteConfig } from 'vue-router/types/router';

export const UserGuideRoutes: RouteConfig[] = [
  {
    path:      '/userGuide',
    component: () => import(/* webpackChunkName: "userGuide" */ './UserGuide/UserGuide.vue').then(m => m.default),
  },
];
