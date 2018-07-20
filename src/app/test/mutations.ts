import { ITestState } from './state';

export interface ITestMutations {
  SET_INCREMENT_PENDING(state: ITestState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: ITestState, pending: boolean): void;

  SET_COUNT(state: ITestState, count: number): void;
}

export const TestMutations: ITestMutations = {
  SET_INCREMENT_PENDING: (state: ITestState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: ITestState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: ITestState, count: number) => {
    state.count = count;
  },
};
