export interface ISignInModalState {
  isOpen: boolean;
  userData: object;
}

export const SignInModalDefaultState: ISignInModalState = {
  isOpen: false,
  userData: null
};
