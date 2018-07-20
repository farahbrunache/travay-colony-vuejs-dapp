import { Module }                             from 'vuex';
import { WalletDefaultState, IWalletState } from './state';
import { WalletActions }                     from './actions';
import { WalletGetters }                     from './getters';
import { WalletMutations }                   from './mutations';

export const WalletModule: Module<IWalletState, IWalletState> = {
  namespaced: true,
  actions:    {
    ...WalletActions,
  },
  getters:    {
    ...WalletGetters,
  },
  state:      {
    ...WalletDefaultState,
  },
  mutations:  {
    ...WalletMutations,
  },
};
