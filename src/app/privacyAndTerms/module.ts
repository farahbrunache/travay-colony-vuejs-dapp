import { Module }                             from 'vuex';
import { PrivacyAndTermsDefaultState, IPrivacyAndTermsState } from './state';
import { PrivacyAndTermsActions }                     from './actions';
import { PrivacyAndTermsGetters }                     from './getters';
import { PrivacyAndTermsMutations }                   from './mutations';

export const PrivacyAndTermsModule: Module<IPrivacyAndTermsState, IPrivacyAndTermsState> = {
  namespaced: true,
  actions:    {
    ...PrivacyAndTermsActions,
  },
  getters:    {
    ...PrivacyAndTermsGetters,
  },
  state:      {
    ...PrivacyAndTermsDefaultState,
  },
  mutations:  {
    ...PrivacyAndTermsMutations,
  },
};
