export interface IJobsGridState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const JobsGridDefaultState: IJobsGridState = {
  incrementPending: false,
  decrementPending: false,
  count:            0,
};
