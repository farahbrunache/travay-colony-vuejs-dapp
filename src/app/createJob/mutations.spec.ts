import { CreateJobMutations }                   from './mutations';
import { CreateJobDefaultState, ICreateJobState } from './state';
import { cloneDeep }                          from 'lodash';

describe('CreateJobMutations', () => {
  let testState: ICreateJobState;

  beforeEach(() => {
    testState = cloneDeep(CreateJobDefaultState);
  });

  test('it should set the count', () => {
    CreateJobMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    CreateJobMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    CreateJobMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
