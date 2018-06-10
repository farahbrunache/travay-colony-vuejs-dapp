import { BalanceGetters }      from './getters';
import { BalanceDefaultState } from './state';

describe('BalanceGetters', () => {

  test('it should get the count', () => {
    expect(BalanceGetters.count(BalanceDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(BalanceGetters.incrementPending(BalanceDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(BalanceGetters.decrementPending(BalanceDefaultState)).toBe(false);
  });

});
