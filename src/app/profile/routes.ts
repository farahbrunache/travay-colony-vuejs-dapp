import { RouteConfig } from 'vue-router/types/router';

export const ProfileRoutes: RouteConfig[] = [
  {
    path:      '/profile',
    component: () => import(/* webpackChunkName: "profile" */ './Profile/Profile.vue').then(m => m.default),
  },
];
