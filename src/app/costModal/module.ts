import { Module }                             from 'vuex';
import { CostModalDefaultState, ICostModalState } from './state';
import { CostModalActions }                     from './actions';
import { CostModalGetters }                     from './getters';
import { CostModalMutations }                   from './mutations';

export const CostModalModule: Module<ICostModalState, ICostModalState> = {
  namespaced: true,
  actions:    {
    ...CostModalActions,
  },
  getters:    {
    ...CostModalGetters,
  },
  state:      {
    ...CostModalDefaultState,
  },
  mutations:  {
    ...CostModalMutations,
  },
};
