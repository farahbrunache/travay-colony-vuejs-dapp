import { ICostModalState } from './state';

export interface ICostModalGetters {
  incrementPending(state: ICostModalState): boolean;
  decrementPending(state: ICostModalState): boolean;
  count(state: ICostModalState): number;
}

export const CostModalGetters: ICostModalGetters = {
  incrementPending(state: ICostModalState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: ICostModalState): boolean {
    return state.decrementPending;
  },
  count(state: ICostModalState): number {
    return state.count;
  },
};
