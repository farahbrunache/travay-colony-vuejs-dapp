import { TransactionModalMutations } from './mutations';
import { TransactionModalDefaultState, ITransactionModalState } from './state';
import { cloneDeep } from 'lodash';

describe('TransactionModalMutations', () => {
  let testState: ITransactionModalState;

  beforeEach(() => {
    testState = cloneDeep(TransactionModalDefaultState);
  });
});
