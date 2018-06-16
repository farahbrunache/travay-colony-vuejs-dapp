import { ISigninState } from './state';

export interface ISigninMutations {
  SET_INCREMENT_PENDING(state: ISigninState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: ISigninState, pending: boolean): void;

  SET_COUNT(state: ISigninState, count: number): void;
}

export const SigninMutations: ISigninMutations = {
  SET_INCREMENT_PENDING: (state: ISigninState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: ISigninState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: ISigninState, count: number) => {
    state.count = count;
  },
};
