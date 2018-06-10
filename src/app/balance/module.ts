import { Module }                             from 'vuex';
import { BalanceDefaultState, IBalanceState } from './state';
import { BalanceActions }                     from './actions';
import { BalanceGetters }                     from './getters';
import { BalanceMutations }                   from './mutations';

export const BalanceModule: Module<IBalanceState, IBalanceState> = {
  namespaced: true,
  actions:    {
    ...BalanceActions,
  },
  getters:    {
    ...BalanceGetters,
  },
  state:      {
    ...BalanceDefaultState,
  },
  mutations:  {
    ...BalanceMutations,
  },
};
