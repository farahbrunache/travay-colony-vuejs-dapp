import { ICreateJobState } from './state';

export interface ICreateJobMutations {
  SET_INCREMENT_PENDING(state: ICreateJobState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: ICreateJobState, pending: boolean): void;

  SET_COUNT(state: ICreateJobState, count: number): void;
}

export const CreateJobMutations: ICreateJobMutations = {
  SET_INCREMENT_PENDING: (state: ICreateJobState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: ICreateJobState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: ICreateJobState, count: number) => {
    state.count = count;
  },
};
