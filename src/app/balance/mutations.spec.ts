import { BalanceMutations }                   from './mutations';
import { BalanceDefaultState, IBalanceState } from './state';
import { cloneDeep }                          from 'lodash';

describe('BalanceMutations', () => {
  let testState: IBalanceState;

  beforeEach(() => {
    testState = cloneDeep(BalanceDefaultState);
  });

  test('it should set the count', () => {
    BalanceMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    BalanceMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    BalanceMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
