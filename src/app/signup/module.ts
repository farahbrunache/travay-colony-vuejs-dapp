import { Module }                             from 'vuex';
import { SignupDefaultState, ISignupState } from './state';
import { SignupActions }                     from './actions';
import { SignupGetters }                     from './getters';
import { SignupMutations }                   from './mutations';

export const SignupModule: Module<ISignupState, ISignupState> = {
  namespaced: true,
  actions:    {
    ...SignupActions,
  },
  getters:    {
    ...SignupGetters,
  },
  state:      {
    ...SignupDefaultState,
  },
  mutations:  {
    ...SignupMutations,
  },
};
