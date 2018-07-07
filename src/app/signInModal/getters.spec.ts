import { SignInModalGetters }      from './getters';
import { SignInModalDefaultState } from './state';

describe('SignInModalGetters', () => {

  test('it should get the count', () => {
    expect(SignInModalGetters.count(SignInModalDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(SignInModalGetters.incrementPending(SignInModalDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(SignInModalGetters.decrementPending(SignInModalDefaultState)).toBe(false);
  });

});
