import { ISignInModalState } from './state';

export interface ISignInModalGetters {
  isOpen(state: ISignInModalState): boolean;
}

export const SignInModalGetters: ISignInModalGetters = {
  isOpen(state) {
    console.log('In SignInModalGetter', state);
    return state.isOpen;
  }
};
