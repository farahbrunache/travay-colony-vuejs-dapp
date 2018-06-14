import { SignupMutations }                   from './mutations';
import { SignupDefaultState, ISignupState } from './state';
import { cloneDeep }                          from 'lodash';

describe('SignupMutations', () => {
  let testState: ISignupState;

  beforeEach(() => {
    testState = cloneDeep(SignupDefaultState);
  });

  test('it should set the count', () => {
    SignupMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    SignupMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    SignupMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
