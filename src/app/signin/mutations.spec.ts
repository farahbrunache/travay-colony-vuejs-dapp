import { SigninMutations }                   from './mutations';
import { SigninDefaultState, ISigninState } from './state';
import { cloneDeep }                          from 'lodash';

describe('SigninMutations', () => {
  let testState: ISigninState;

  beforeEach(() => {
    testState = cloneDeep(SigninDefaultState);
  });

  test('it should set the count', () => {
    SigninMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    SigninMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    SigninMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
