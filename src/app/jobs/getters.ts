import { IJobsState } from './state';

export interface IJobsGetters {
  incrementPending(state: IJobsState): boolean;
  decrementPending(state: IJobsState): boolean;
  count(state: IJobsState): number;
}

export const JobsGetters: IJobsGetters = {
  incrementPending(state: IJobsState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: IJobsState): boolean {
    return state.decrementPending;
  },
  count(state: IJobsState): number {
    return state.count;
  },
};
