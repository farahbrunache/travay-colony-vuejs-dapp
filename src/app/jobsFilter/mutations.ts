import { IJobsFilterState } from './state';

export interface IJobsFilterMutations {
  SET_INCREMENT_PENDING(state: IJobsFilterState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: IJobsFilterState, pending: boolean): void;

  SET_COUNT(state: IJobsFilterState, count: number): void;
}

export const JobsFilterMutations: IJobsFilterMutations = {
  SET_INCREMENT_PENDING: (state: IJobsFilterState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: IJobsFilterState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: IJobsFilterState, count: number) => {
    state.count = count;
  },
};
