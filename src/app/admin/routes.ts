import { RouteConfig } from 'vue-router/types/router';

export const AdminRoutes: RouteConfig[] = [
  {
    path: '/admin',
    component: () =>
      import(/* webpackChunkName: "admin" */ './Admin/Admin.vue').then(
        m => m.default
      ),
    meta: {
      adminOnly: true
    }
  }
];
