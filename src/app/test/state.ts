export interface ITestState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const TestDefaultState: ITestState = {
  incrementPending: false,
  decrementPending: false,
  count:            0,
};
