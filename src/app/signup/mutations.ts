import { ISignupState } from './state';

export interface ISignupMutations {
  SET_INCREMENT_PENDING(state: ISignupState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: ISignupState, pending: boolean): void;

  SET_COUNT(state: ISignupState, count: number): void;
}

export const SignupMutations: ISignupMutations = {
  SET_INCREMENT_PENDING: (state: ISignupState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: ISignupState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: ISignupState, count: number) => {
    state.count = count;
  },
};
