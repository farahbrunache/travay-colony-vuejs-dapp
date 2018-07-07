import { ISignInModalState } from './state';

export interface ISignInModalMutations {
  SET_IS_OPEN(state: ISignInModalState, isOpen: boolean): void;
}

export const SignInModalMutations: ISignInModalMutations = {
  SET_IS_OPEN: (state: ISignInModalState, isOpen: boolean) => {
    state.isOpen = isOpen;
  }
};
