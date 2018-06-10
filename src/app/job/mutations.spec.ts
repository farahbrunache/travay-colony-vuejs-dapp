import { JobMutations }                   from './mutations';
import { JobDefaultState, IJobState } from './state';
import { cloneDeep }                          from 'lodash';

describe('JobMutations', () => {
  let testState: IJobState;

  beforeEach(() => {
    testState = cloneDeep(JobDefaultState);
  });

  test('it should set the count', () => {
    JobMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    JobMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    JobMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
