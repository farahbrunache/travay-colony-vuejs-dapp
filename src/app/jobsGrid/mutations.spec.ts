import { JobsGridMutations }                   from './mutations';
import { JobsGridDefaultState, IJobsGridState } from './state';
import { cloneDeep }                          from 'lodash';

describe('JobsGridMutations', () => {
  let testState: IJobsGridState;

  beforeEach(() => {
    testState = cloneDeep(JobsGridDefaultState);
  });

  test('it should set the count', () => {
    JobsGridMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    JobsGridMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    JobsGridMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
