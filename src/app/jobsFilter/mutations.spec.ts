import { JobsFilterMutations }                   from './mutations';
import { JobsFilterDefaultState, IJobsFilterState } from './state';
import { cloneDeep }                          from 'lodash';

describe('JobsFilterMutations', () => {
  let testState: IJobsFilterState;

  beforeEach(() => {
    testState = cloneDeep(JobsFilterDefaultState);
  });

  test('it should set the count', () => {
    JobsFilterMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    JobsFilterMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    JobsFilterMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
