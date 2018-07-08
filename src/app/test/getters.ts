import { ITestState } from './state';

export interface ITestGetters {
  incrementPending(state: ITestState): boolean;
  decrementPending(state: ITestState): boolean;
  count(state: ITestState): number;
}

export const TestGetters: ITestGetters = {
  incrementPending(state: ITestState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: ITestState): boolean {
    return state.decrementPending;
  },
  count(state: ITestState): number {
    return state.count;
  },
};
