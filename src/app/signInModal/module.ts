import { Module }                             from 'vuex';
import { SignInModalDefaultState, ISignInModalState } from './state';
import { SignInModalActions }                     from './actions';
import { SignInModalGetters }                     from './getters';
import { SignInModalMutations }                   from './mutations';

export const SignInModalModule: Module<ISignInModalState, ISignInModalState> = {
  namespaced: true,
  actions:    {
    ...SignInModalActions,
  },
  getters:    {
    ...SignInModalGetters,
  },
  state:      {
    ...SignInModalDefaultState,
  },
  mutations:  {
    ...SignInModalMutations,
  },
};
