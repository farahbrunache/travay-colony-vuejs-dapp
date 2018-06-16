import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { DefaultState, IState } from './state';
import { VuexPersist } from './shared/plugins/vuex-persist/vuex-persist';
import { PersistLocalStorage } from './shared/plugins/vuex-persist/PersistLocalStorage';
import { PersistCookieStorage } from './shared/plugins/vuex-persist/PersistCookieStorage';
import { AppModule } from './app/module';
import { ProfileModule } from './profile/module';
import { BalanceModule } from './balance/module';
import { JobsModule } from './jobs/module';
import { JobModule } from './job/module';
import { PrivacyAndTermsModule } from './privacyAndTerms/module';
import { CreateJobModule } from './createJob/module';
import { SignupModule } from './signup/module';
import { TestModule } from './test/module';
import { SigninModule }            from './signin/module';

Vue.use(Vuex);

const state: IState = (CLIENT && window.__INITIAL_STATE__) || DefaultState;

/* istanbul ignore next */
// const beforePersistLocalStorage = (localState: IState): IState => {
//   delete localState.counter.incrementPending;
//   delete localState.counter.decrementPending;

//   return localState;
// };

/* istanbul ignore next */
// const beforePersistCookieStorage = (localState: IState): IState => {
//   delete localState.app.config;
//   delete localState.app.defaultMessages;
//   delete localState.app.redirectTo;

//   return localState;
// };

export const store: Store<IState> = new Vuex.Store(
  {
    state,
    // plugins: [
    //   VuexPersist(
    //     [
    //       new PersistLocalStorage(['counter'], beforePersistLocalStorage),
    //       new PersistCookieStorage(
    //         ['app'],
    //         {
    //           cookieOptions: {
    //             expires: 365,
    //           },
    //           beforePersist: beforePersistCookieStorage,
    //         },
    //       ),
    //     ],
    //   ),
    // ],
  },
);

store.registerModule(['app'], AppModule, { preserveState: true });
store.registerModule(['profile'], ProfileModule, { preserveState: true });
store.registerModule(['balance'], BalanceModule, { preserveState: true });
store.registerModule(['jobs'], JobsModule, { preserveState: true });
store.registerModule(['job'], JobModule, { preserveState: true });
store.registerModule(['privacyAndTerms'], PrivacyAndTermsModule, { preserveState: true });
store.registerModule(['createJob'], CreateJobModule, { preserveState: true });
store.registerModule(['signup'], SignupModule, { preserveState: true });
store.registerModule(['test'], TestModule, { preserveState: true });
store.registerModule(['signin'], SigninModule, { preserveState: true });
