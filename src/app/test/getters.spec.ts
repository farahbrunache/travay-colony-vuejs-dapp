import { TestGetters }      from './getters';
import { TestDefaultState } from './state';

describe('TestGetters', () => {

  test('it should get the count', () => {
    expect(TestGetters.count(TestDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(TestGetters.incrementPending(TestDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(TestGetters.decrementPending(TestDefaultState)).toBe(false);
  });

});
