import { JobGetters }      from './getters';
import { JobDefaultState } from './state';

describe('JobGetters', () => {

  test('it should get the count', () => {
    expect(JobGetters.count(JobDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(JobGetters.incrementPending(JobDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(JobGetters.decrementPending(JobDefaultState)).toBe(false);
  });

});
