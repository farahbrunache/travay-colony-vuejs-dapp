import { Module }                             from 'vuex';
import { AdminDefaultState, IAdminState } from './state';
import { AdminActions }                     from './actions';
import { AdminGetters }                     from './getters';
import { AdminMutations }                   from './mutations';

export const AdminModule: Module<IAdminState, IAdminState> = {
  namespaced: true,
  actions:    {
    ...AdminActions,
  },
  getters:    {
    ...AdminGetters,
  },
  state:      {
    ...AdminDefaultState,
  },
  mutations:  {
    ...AdminMutations,
  },
};
