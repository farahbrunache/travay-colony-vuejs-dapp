export interface ICostModalState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const CostModalDefaultState: ICostModalState = {
  incrementPending: false,
  decrementPending: false,
  count:            0,
};
