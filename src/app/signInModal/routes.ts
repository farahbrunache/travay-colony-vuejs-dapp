import { RouteConfig } from 'vue-router/types/router';

export const SignInModalRoutes: RouteConfig[] = [
  {
    path:      '/signInModal',
    component: () => import(/* webpackChunkName: "signInModal" */ './SignInModal/SignInModal.vue').then(m => m.default),
  },
];
