import { TestMutations }                   from './mutations';
import { TestDefaultState, ITestState } from './state';
import { cloneDeep }                          from 'lodash';

describe('TestMutations', () => {
  let testState: ITestState;

  beforeEach(() => {
    testState = cloneDeep(TestDefaultState);
  });

  test('it should set the count', () => {
    TestMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    TestMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    TestMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
