import { RouteConfig } from 'vue-router/types/router';

export const TestRoutes: RouteConfig[] = [
  {
    path:      '/test',
    component: () => import(/* webpackChunkName: "test" */ './Test/Test.vue').then(m => m.default),
  },
];
