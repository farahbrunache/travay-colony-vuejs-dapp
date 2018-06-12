import { ICreateJobState } from './state';

export interface ICreateJobGetters {
  incrementPending(state: ICreateJobState): boolean;
  decrementPending(state: ICreateJobState): boolean;
  count(state: ICreateJobState): number;
}

export const CreateJobGetters: ICreateJobGetters = {
  incrementPending(state: ICreateJobState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: ICreateJobState): boolean {
    return state.decrementPending;
  },
  count(state: ICreateJobState): number {
    return state.count;
  },
};
