import { ActionContext } from 'vuex';
import { ISignInModalState } from './state';
import { HttpService } from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';
export interface ISignInModalResponse {}

export interface ISignInModalActions {
  openLoginModal(context: ActionContext<ISignInModalState>): void;
  closeLoginModal(context: ActionContent<ISignInModalState>): void;
  saveUserInStorage({ commit: any }, userData: any): any;
  logoutUser(context: ActionContext<ISigninState>): void;
}

export const SignInModalActions: ISignInModalActions = {
  openLoginModal({ commit }: ActionContext<ISignInModalState>) {
    commit('SET_IS_OPEN', true);
  },
  closeLoginModal({ commit }: ActionContext<ISingInModalState>) {
    commit('SET_IS_OPEN', false);
  },
  saveUserInStorage({ commit }, userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
    commit('SET_USER_DATA', userData);
  },
  logoutUser({ commit }: ActionContext<ISigninState>): void {
    localStorage.removeItem('userData');
    commit('SET_USER_DATA', null);
  }
};
