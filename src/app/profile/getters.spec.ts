import { ProfileGetters }      from './getters';
import { ProfileDefaultState } from './state';

describe('ProfileGetters', () => {

  test('it should get the count', () => {
    expect(ProfileGetters.count(ProfileDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(ProfileGetters.incrementPending(ProfileDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(ProfileGetters.decrementPending(ProfileDefaultState)).toBe(false);
  });

});
