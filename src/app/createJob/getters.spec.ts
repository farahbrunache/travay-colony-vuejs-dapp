import { CreateJobGetters }      from './getters';
import { CreateJobDefaultState } from './state';

describe('CreateJobGetters', () => {

  test('it should get the count', () => {
    expect(CreateJobGetters.count(CreateJobDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(CreateJobGetters.incrementPending(CreateJobDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(CreateJobGetters.decrementPending(CreateJobDefaultState)).toBe(false);
  });

});
