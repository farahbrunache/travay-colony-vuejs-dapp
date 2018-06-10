import { JobsGetters }      from './getters';
import { JobsDefaultState } from './state';

describe('JobsGetters', () => {

  test('it should get the count', () => {
    expect(JobsGetters.count(JobsDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(JobsGetters.incrementPending(JobsDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(JobsGetters.decrementPending(JobsDefaultState)).toBe(false);
  });

});
