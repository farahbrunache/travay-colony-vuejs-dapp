import { WalletMutations } from './mutations';
import { WalletDefaultState, IWalletState } from './state';
import { cloneDeep } from 'lodash';

describe('WalletMutations', () => {
  let testState: IWalletState;

  beforeEach(() => {
    testState = cloneDeep(WalletDefaultState);
  });
});
