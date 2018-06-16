export interface ISigninState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const SigninDefaultState: ISigninState = {
  incrementPending: false,
  decrementPending: false,
  count:            0,
};
