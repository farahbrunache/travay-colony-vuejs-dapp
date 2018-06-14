import { ISignupState } from './state';

export interface ISignupGetters {
  incrementPending(state: ISignupState): boolean;
  decrementPending(state: ISignupState): boolean;
  count(state: ISignupState): number;
}

export const SignupGetters: ISignupGetters = {
  incrementPending(state: ISignupState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: ISignupState): boolean {
    return state.decrementPending;
  },
  count(state: ISignupState): number {
    return state.count;
  },
};
