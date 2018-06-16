import { SigninGetters }      from './getters';
import { SigninDefaultState } from './state';

describe('SigninGetters', () => {

  test('it should get the count', () => {
    expect(SigninGetters.count(SigninDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(SigninGetters.incrementPending(SigninDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(SigninGetters.decrementPending(SigninDefaultState)).toBe(false);
  });

});
