import { IJobState } from './state';

export interface IJobGetters {
  incrementPending(state: IJobState): boolean;
  decrementPending(state: IJobState): boolean;
  count(state: IJobState): number;
}

export const JobGetters: IJobGetters = {
  incrementPending(state: IJobState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: IJobState): boolean {
    return state.decrementPending;
  },
  count(state: IJobState): number {
    return state.count;
  },
};
