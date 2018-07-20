import { CostModalMutations }                   from './mutations';
import { CostModalDefaultState, ICostModalState } from './state';
import { cloneDeep }                          from 'lodash';

describe('CostModalMutations', () => {
  let testState: ICostModalState;

  beforeEach(() => {
    testState = cloneDeep(CostModalDefaultState);
  });

  test('it should set the count', () => {
    CostModalMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    CostModalMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    CostModalMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
