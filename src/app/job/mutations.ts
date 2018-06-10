import { IJobState } from './state';

export interface IJobMutations {
  SET_INCREMENT_PENDING(state: IJobState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: IJobState, pending: boolean): void;

  SET_COUNT(state: IJobState, count: number): void;
}

export const JobMutations: IJobMutations = {
  SET_INCREMENT_PENDING: (state: IJobState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: IJobState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: IJobState, count: number) => {
    state.count = count;
  },
};
