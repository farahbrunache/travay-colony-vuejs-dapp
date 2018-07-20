import { Module }                             from 'vuex';
import { JobDefaultState, IJobState } from './state';
import { JobActions }                     from './actions';
import { JobGetters }                     from './getters';
import { JobMutations }                   from './mutations';

export const JobModule: Module<IJobState, IJobState> = {
  namespaced: true,
  actions:    {
    ...JobActions,
  },
  getters:    {
    ...JobGetters,
  },
  state:      {
    ...JobDefaultState,
  },
  mutations:  {
    ...JobMutations,
  },
};
