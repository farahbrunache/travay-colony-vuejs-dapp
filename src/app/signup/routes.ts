import { RouteConfig } from 'vue-router/types/router';

export const SignupRoutes: RouteConfig[] = [
  {
    path:      '/signup',
    component: () => import(/* webpackChunkName: "signup" */ './Signup/Signup.vue').then(m => m.default),
  },
];
