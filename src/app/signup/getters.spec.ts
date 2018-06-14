import { SignupGetters }      from './getters';
import { SignupDefaultState } from './state';

describe('SignupGetters', () => {

  test('it should get the count', () => {
    expect(SignupGetters.count(SignupDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(SignupGetters.incrementPending(SignupDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(SignupGetters.decrementPending(SignupDefaultState)).toBe(false);
  });

});
