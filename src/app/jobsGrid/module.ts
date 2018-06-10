import { Module }                             from 'vuex';
import { JobsGridDefaultState, IJobsGridState } from './state';
import { JobsGridActions }                     from './actions';
import { JobsGridGetters }                     from './getters';
import { JobsGridMutations }                   from './mutations';

export const JobsGridModule: Module<IJobsGridState, IJobsGridState> = {
  namespaced: true,
  actions:    {
    ...JobsGridActions,
  },
  getters:    {
    ...JobsGridGetters,
  },
  state:      {
    ...JobsGridDefaultState,
  },
  mutations:  {
    ...JobsGridMutations,
  },
};
