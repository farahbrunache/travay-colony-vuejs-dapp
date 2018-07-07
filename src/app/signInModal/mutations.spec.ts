import { SignInModalMutations }                   from './mutations';
import { SignInModalDefaultState, ISignInModalState } from './state';
import { cloneDeep }                          from 'lodash';

describe('SignInModalMutations', () => {
  let testState: ISignInModalState;

  beforeEach(() => {
    testState = cloneDeep(SignInModalDefaultState);
  });

  test('it should set the count', () => {
    SignInModalMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    SignInModalMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    SignInModalMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
