import { IProfileState } from './state';

export interface IProfileGetters {
  incrementPending(state: IProfileState): boolean;
  decrementPending(state: IProfileState): boolean;
  count(state: IProfileState): number;
}

export const ProfileGetters: IProfileGetters = {
  incrementPending(state: IProfileState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: IProfileState): boolean {
    return state.decrementPending;
  },
  count(state: IProfileState): number {
    return state.count;
  },
};
