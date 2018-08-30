import { ISignInModalState } from './state';

export interface ISignInModalMutations {
  SET_IS_OPEN(state: ISignInModalState, isOpen: boolean): void;
  SET_USER_DATA(state: ISignInModalState, userData: object): void;
}

export const SignInModalMutations: ISignInModalMutations = {
  SET_IS_OPEN: (state: ISignInModalState, isOpen: boolean) => {
    state.isOpen = isOpen;
  },
  SET_USER_DATA: (state: ISignInModalState, userData: object) => {
    state.userData = userData;
  }
};
