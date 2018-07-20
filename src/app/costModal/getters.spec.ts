import { CostModalGetters }      from './getters';
import { CostModalDefaultState } from './state';

describe('CostModalGetters', () => {

  test('it should get the count', () => {
    expect(CostModalGetters.count(CostModalDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(CostModalGetters.incrementPending(CostModalDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(CostModalGetters.decrementPending(CostModalDefaultState)).toBe(false);
  });

});
