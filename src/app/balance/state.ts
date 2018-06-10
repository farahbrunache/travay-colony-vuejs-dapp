export interface IBalanceState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const BalanceDefaultState: IBalanceState = {
  incrementPending: false,
  decrementPending: false,
  count:            0,
};
