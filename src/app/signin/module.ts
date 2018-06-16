import { Module }                             from 'vuex';
import { SigninDefaultState, ISigninState } from './state';
import { SigninActions }                     from './actions';
import { SigninGetters }                     from './getters';
import { SigninMutations }                   from './mutations';

export const SigninModule: Module<ISigninState, ISigninState> = {
  namespaced: true,
  actions:    {
    ...SigninActions,
  },
  getters:    {
    ...SigninGetters,
  },
  state:      {
    ...SigninDefaultState,
  },
  mutations:  {
    ...SigninMutations,
  },
};
