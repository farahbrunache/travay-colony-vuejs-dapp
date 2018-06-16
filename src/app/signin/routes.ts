import { RouteConfig } from 'vue-router/types/router';

export const SigninRoutes: RouteConfig[] = [
  {
    path:      '/signin',
    component: () => import(/* webpackChunkName: "signin" */ './Signin/Signin.vue').then(m => m.default),
  },
];
