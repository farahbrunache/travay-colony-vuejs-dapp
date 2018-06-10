import { IBalanceState } from './state';

export interface IBalanceMutations {
  SET_INCREMENT_PENDING(state: IBalanceState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: IBalanceState, pending: boolean): void;

  SET_COUNT(state: IBalanceState, count: number): void;
}

export const BalanceMutations: IBalanceMutations = {
  SET_INCREMENT_PENDING: (state: IBalanceState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: IBalanceState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: IBalanceState, count: number) => {
    state.count = count;
  },
};
