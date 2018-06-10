export interface IJobState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const JobDefaultState: IJobState = {
  incrementPending: false,
  decrementPending: false,
  count:            0,
};
