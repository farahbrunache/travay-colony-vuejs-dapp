export interface IProfileState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const ProfileDefaultState: IProfileState = {
  incrementPending: false,
  decrementPending: false,
  count:            0,
};
