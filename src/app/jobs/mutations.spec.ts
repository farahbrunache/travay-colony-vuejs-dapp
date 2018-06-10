import { JobsMutations }                   from './mutations';
import { JobsDefaultState, IJobsState } from './state';
import { cloneDeep }                          from 'lodash';

describe('JobsMutations', () => {
  let testState: IJobsState;

  beforeEach(() => {
    testState = cloneDeep(JobsDefaultState);
  });

  test('it should set the count', () => {
    JobsMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    JobsMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    JobsMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
