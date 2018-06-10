import { Module }                             from 'vuex';
import { JobsDefaultState, IJobsState } from './state';
import { JobsActions }                     from './actions';
import { JobsGetters }                     from './getters';
import { JobsMutations }                   from './mutations';

export const JobsModule: Module<IJobsState, IJobsState> = {
  namespaced: true,
  actions:    {
    ...JobsActions,
  },
  getters:    {
    ...JobsGetters,
  },
  state:      {
    ...JobsDefaultState,
  },
  mutations:  {
    ...JobsMutations,
  },
};
