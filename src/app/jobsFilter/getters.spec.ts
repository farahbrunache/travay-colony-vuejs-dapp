import { JobsFilterGetters }      from './getters';
import { JobsFilterDefaultState } from './state';

describe('JobsFilterGetters', () => {

  test('it should get the count', () => {
    expect(JobsFilterGetters.count(JobsFilterDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(JobsFilterGetters.incrementPending(JobsFilterDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(JobsFilterGetters.decrementPending(JobsFilterDefaultState)).toBe(false);
  });

});
