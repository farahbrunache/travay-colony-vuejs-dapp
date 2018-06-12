export interface ICreateJobState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const CreateJobDefaultState: ICreateJobState = {
  incrementPending: false,
  decrementPending: false,
  count:            0,
};
