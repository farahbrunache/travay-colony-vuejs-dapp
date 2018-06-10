import Vue                  from 'vue';
import VueRouter            from 'vue-router';
import Meta                 from 'vue-meta';
import { AppRoutes }        from './app/routes';
import { HomeRoutes }       from './home/routes';
import { ProfileRoutes }         from './profile/routes';
import { BalanceRoutes }         from './balance/routes';
import { JobsRoutes }         from './jobs/routes';
import { JobRoutes }         from './job/routes';
import { JobsFilterRoutes }         from './jobsFilter/routes';
import { JobsGridRoutes }         from './jobsGrid/routes';
// Delete dummy data
// import { CounterRoutes }    from './counter/routes';
// import { ComponentsRoutes } from './components/routes';

Vue.use(VueRouter);
Vue.use(Meta);

export const router: VueRouter = new VueRouter(
  {
    mode:   'history',
    base:   __dirname,
    routes: [
      ...AppRoutes,
      ...HomeRoutes,
      // Delete dummy data
      // ...CounterRoutes,
      // ...ComponentsRoutes,
     ...ProfileRoutes,
     ...BalanceRoutes,
     ...JobsRoutes,
     ...JobRoutes,
     ...JobsFilterRoutes,
     ...JobsGridRoutes,
   ],
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return { selector: to.hash };
      }
      return savedPosition || { x: 0, y: 0 };
    },
  },
);
