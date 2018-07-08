import { ISigninState } from './state';

export interface ISigninGetters {
  userId(state: ISigninState): number;
}

export const SigninGetters: ISigninGetters = {
  userId(state: ISigninState): number {
    return state.userData ? Reflect.get(state.userData, 'uid') : null;
  }
};
