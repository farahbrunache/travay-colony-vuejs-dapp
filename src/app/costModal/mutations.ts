import { ICostModalState } from './state';

export interface ICostModalMutations {
  SET_INCREMENT_PENDING(state: ICostModalState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: ICostModalState, pending: boolean): void;

  SET_COUNT(state: ICostModalState, count: number): void;
}

export const CostModalMutations: ICostModalMutations = {
  SET_INCREMENT_PENDING: (state: ICostModalState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: ICostModalState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: ICostModalState, count: number) => {
    state.count = count;
  },
};
