import { IProfileState } from './state';

export interface IProfileMutations {
  SET_INCREMENT_PENDING(state: IProfileState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: IProfileState, pending: boolean): void;

  SET_COUNT(state: IProfileState, count: number): void;
}

export const ProfileMutations: IProfileMutations = {
  SET_INCREMENT_PENDING: (state: IProfileState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: IProfileState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: IProfileState, count: number) => {
    state.count = count;
  },
};
