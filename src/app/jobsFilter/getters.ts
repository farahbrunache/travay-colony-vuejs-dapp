import { IJobsFilterState } from './state';

export interface IJobsFilterGetters {
  incrementPending(state: IJobsFilterState): boolean;
  decrementPending(state: IJobsFilterState): boolean;
  count(state: IJobsFilterState): number;
}

export const JobsFilterGetters: IJobsFilterGetters = {
  incrementPending(state: IJobsFilterState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: IJobsFilterState): boolean {
    return state.decrementPending;
  },
  count(state: IJobsFilterState): number {
    return state.count;
  },
};
