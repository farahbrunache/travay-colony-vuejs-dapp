import { ProfileMutations }                   from './mutations';
import { ProfileDefaultState, IProfileState } from './state';
import { cloneDeep }                          from 'lodash';

describe('ProfileMutations', () => {
  let testState: IProfileState;

  beforeEach(() => {
    testState = cloneDeep(ProfileDefaultState);
  });

  test('it should set the count', () => {
    ProfileMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    ProfileMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    ProfileMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
