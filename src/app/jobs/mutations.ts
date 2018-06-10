import { IJobsState } from './state';

export interface IJobsMutations {
  SET_INCREMENT_PENDING(state: IJobsState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: IJobsState, pending: boolean): void;

  SET_COUNT(state: IJobsState, count: number): void;
}

export const JobsMutations: IJobsMutations = {
  SET_INCREMENT_PENDING: (state: IJobsState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: IJobsState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: IJobsState, count: number) => {
    state.count = count;
  },
};
