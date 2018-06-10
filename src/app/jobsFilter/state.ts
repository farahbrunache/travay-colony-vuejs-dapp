export interface IJobsFilterState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const JobsFilterDefaultState: IJobsFilterState = {
  incrementPending: false,
  decrementPending: false,
  count:            0,
};
