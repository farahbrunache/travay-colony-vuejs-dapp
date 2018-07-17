import { ISignInModalState } from './state';

export interface ISignInModalGetters {
  isOpen(state: ISignInModalState): boolean;
  userId(state: ISigninState): number;
}

export const SignInModalGetters: ISignInModalGetters = {
  isOpen(state) {
    console.log('In SignInModalGetter', state);
    return state.isOpen;
  },
  userId(state: ISigninState): number {
    return state.userData ? Reflect.get(state.userData, 'uid') : null;
  }
};
