import { PrivacyAndTermsMutations }                   from './mutations';
import { PrivacyAndTermsDefaultState, IPrivacyAndTermsState } from './state';
import { cloneDeep }                          from 'lodash';

describe('PrivacyAndTermsMutations', () => {
  let testState: IPrivacyAndTermsState;

  beforeEach(() => {
    testState = cloneDeep(PrivacyAndTermsDefaultState);
  });

  test('it should set the count', () => {
    PrivacyAndTermsMutations.SET_COUNT(testState, 1337);
    expect(testState.count).toBe(1337);
  });

  test('it should set increment pending', () => {
    PrivacyAndTermsMutations.SET_INCREMENT_PENDING(testState, true);
    expect(testState.incrementPending).toBe(true);
  });

  test('it should set decrement pending', () => {
    PrivacyAndTermsMutations.SET_DECREMENT_PENDING(testState, true);
    expect(testState.decrementPending).toBe(true);
  });

});
