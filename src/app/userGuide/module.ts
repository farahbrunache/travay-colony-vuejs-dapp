import { Module }                             from 'vuex';
import { UserGuideDefaultState, IUserGuideState } from './state';
import { UserGuideActions }                     from './actions';
import { UserGuideGetters }                     from './getters';
import { UserGuideMutations }                   from './mutations';

export const UserGuideModule: Module<IUserGuideState, IUserGuideState> = {
  namespaced: true,
  actions:    {
    ...UserGuideActions,
  },
  getters:    {
    ...UserGuideGetters,
  },
  state:      {
    ...UserGuideDefaultState,
  },
  mutations:  {
    ...UserGuideMutations,
  },
};
