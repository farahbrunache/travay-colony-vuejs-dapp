export interface ISigninState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
  userData: object;
}

export const SigninDefaultState: ISigninState = {
  incrementPending: false,
  decrementPending: false,
  count: 0,
  userData: null,
};
