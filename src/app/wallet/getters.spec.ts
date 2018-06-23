import { WalletGetters }      from './getters';
import { WalletDefaultState } from './state';

describe('WalletGetters', () => {

  test('it should get the count', () => {
    expect(WalletGetters.count(WalletDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(WalletGetters.incrementPending(WalletDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(WalletGetters.decrementPending(WalletDefaultState)).toBe(false);
  });

});
