import { Module }                             from 'vuex';
import { CreateJobDefaultState, ICreateJobState } from './state';
import { CreateJobActions }                     from './actions';
import { CreateJobGetters }                     from './getters';
import { CreateJobMutations }                   from './mutations';

export const CreateJobModule: Module<ICreateJobState, ICreateJobState> = {
  namespaced: true,
  actions:    {
    ...CreateJobActions,
  },
  getters:    {
    ...CreateJobGetters,
  },
  state:      {
    ...CreateJobDefaultState,
  },
  mutations:  {
    ...CreateJobMutations,
  },
};
