import { Module }                             from 'vuex';
import { ProfileDefaultState, IProfileState } from './state';
import { ProfileActions }                     from './actions';
import { ProfileGetters }                     from './getters';
import { ProfileMutations }                   from './mutations';

export const ProfileModule: Module<IProfileState, IProfileState> = {
  namespaced: true,
  actions:    {
    ...ProfileActions,
  },
  getters:    {
    ...ProfileGetters,
  },
  state:      {
    ...ProfileDefaultState,
  },
  mutations:  {
    ...ProfileMutations,
  },
};
