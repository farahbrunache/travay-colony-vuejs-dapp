import { JobsGridGetters }      from './getters';
import { JobsGridDefaultState } from './state';

describe('JobsGridGetters', () => {

  test('it should get the count', () => {
    expect(JobsGridGetters.count(JobsGridDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(JobsGridGetters.incrementPending(JobsGridDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(JobsGridGetters.decrementPending(JobsGridDefaultState)).toBe(false);
  });

});
