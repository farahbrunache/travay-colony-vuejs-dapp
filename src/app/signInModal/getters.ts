import { ISignInModalState } from './state';

export interface ISignInModalGetters {
  isOpen(state: ISignInModalState): boolean;
  userId(state: ISignInModalState): number;
}

export const SignInModalGetters: ISignInModalGetters = {
  isOpen(state) {
    return state.isOpen;
  },
  userId(state: ISignInModalState): number {
    return state.userData ? Reflect.get(state.userData, 'uid') : null;
  }
};
