import { Module }                             from 'vuex';
import { TestDefaultState, ITestState } from './state';
import { TestActions }                     from './actions';
import { TestGetters }                     from './getters';
import { TestMutations }                   from './mutations';

export const TestModule: Module<ITestState, ITestState> = {
  namespaced: true,
  actions:    {
    ...TestActions,
  },
  getters:    {
    ...TestGetters,
  },
  state:      {
    ...TestDefaultState,
  },
  mutations:  {
    ...TestMutations,
  },
};
