import { IBalanceState } from './state';

export interface IBalanceGetters {
  incrementPending(state: IBalanceState): boolean;
  decrementPending(state: IBalanceState): boolean;
  count(state: IBalanceState): number;
}

export const BalanceGetters: IBalanceGetters = {
  incrementPending(state: IBalanceState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: IBalanceState): boolean {
    return state.decrementPending;
  },
  count(state: IBalanceState): number {
    return state.count;
  },
};
