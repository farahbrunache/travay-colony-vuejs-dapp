import { Module }                             from 'vuex';
import { TransactionModalDefaultState, ITransactionModalState } from './state';
import { TransactionModalActions }                     from './actions';
import { TransactionModalGetters }                     from './getters';
import { TransactionModalMutations }                   from './mutations';

export const TransactionModalModule: Module<ITransactionModalState, ITransactionModalState> = {
  namespaced: true,
  actions:    {
    ...TransactionModalActions,
  },
  getters:    {
    ...TransactionModalGetters,
  },
  state:      {
    ...TransactionModalDefaultState,
  },
  mutations:  {
    ...TransactionModalMutations,
  },
};
