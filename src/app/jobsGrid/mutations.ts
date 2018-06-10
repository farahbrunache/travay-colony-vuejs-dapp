import { IJobsGridState } from './state';

export interface IJobsGridMutations {
  SET_INCREMENT_PENDING(state: IJobsGridState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: IJobsGridState, pending: boolean): void;

  SET_COUNT(state: IJobsGridState, count: number): void;
}

export const JobsGridMutations: IJobsGridMutations = {
  SET_INCREMENT_PENDING: (state: IJobsGridState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: IJobsGridState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: IJobsGridState, count: number) => {
    state.count = count;
  },
};
