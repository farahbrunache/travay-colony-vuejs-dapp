import { Module }                             from 'vuex';
import { JobsFilterDefaultState, IJobsFilterState } from './state';
import { JobsFilterActions }                     from './actions';
import { JobsFilterGetters }                     from './getters';
import { JobsFilterMutations }                   from './mutations';

export const JobsFilterModule: Module<IJobsFilterState, IJobsFilterState> = {
  namespaced: true,
  actions:    {
    ...JobsFilterActions,
  },
  getters:    {
    ...JobsFilterGetters,
  },
  state:      {
    ...JobsFilterDefaultState,
  },
  mutations:  {
    ...JobsFilterMutations,
  },
};
