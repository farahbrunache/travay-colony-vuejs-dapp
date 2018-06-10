import { IJobsGridState } from './state';

export interface IJobsGridGetters {
  incrementPending(state: IJobsGridState): boolean;
  decrementPending(state: IJobsGridState): boolean;
  count(state: IJobsGridState): number;
}

export const JobsGridGetters: IJobsGridGetters = {
  incrementPending(state: IJobsGridState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: IJobsGridState): boolean {
    return state.decrementPending;
  },
  count(state: IJobsGridState): number {
    return state.count;
  },
};
