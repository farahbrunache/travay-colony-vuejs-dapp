import { RouteConfig } from 'vue-router/types/router';

export const PrivacyAndTermsRoutes: RouteConfig[] = [
  {
    path:      '/privacyAndTerms',
    component: () => import(/* webpackChunkName: "privacyAndTerms" */ './PrivacyAndTerms/PrivacyAndTerms.vue').then(m => m.default),
  },
];
