import { ISigninState } from './state';

export interface ISigninGetters {
  incrementPending(state: ISigninState): boolean;
  decrementPending(state: ISigninState): boolean;
  count(state: ISigninState): number;
}

export const SigninGetters: ISigninGetters = {
  incrementPending(state: ISigninState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: ISigninState): boolean {
    return state.decrementPending;
  },
  count(state: ISigninState): number {
    return state.count;
  },
};
