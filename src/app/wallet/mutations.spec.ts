import { WalletMutations }                   from './mutations';
import { WalletDefaultState, IWalletState } from './state';
import { cloneDeep }                          from 'lodash';

describe('WalletMutations', () => {
  let testState: IWalletState;

  beforeEach(() => {
    testState = cloneDeep(WalletDefaultState);
  });

  test('it should set the count', () => {
    WalletMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    WalletMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    WalletMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
