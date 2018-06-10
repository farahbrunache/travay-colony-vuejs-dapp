export interface IJobsState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const JobsDefaultState: IJobsState = {
  incrementPending: false,
  decrementPending: false,
  count:            0,
};
