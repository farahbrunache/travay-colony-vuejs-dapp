export interface ISignupState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const SignupDefaultState: ISignupState = {
  incrementPending: false,
  decrementPending: false,
  count:            0,
};
