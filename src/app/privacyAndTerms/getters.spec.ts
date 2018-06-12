import { PrivacyAndTermsGetters }      from './getters';
import { PrivacyAndTermsDefaultState } from './state';

describe('PrivacyAndTermsGetters', () => {

  test('it should get the count', () => {
    expect(PrivacyAndTermsGetters.count(PrivacyAndTermsDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(PrivacyAndTermsGetters.incrementPending(PrivacyAndTermsDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(PrivacyAndTermsGetters.decrementPending(PrivacyAndTermsDefaultState)).toBe(false);
  });

});
