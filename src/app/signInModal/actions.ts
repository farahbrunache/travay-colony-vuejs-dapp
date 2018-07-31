import { ActionContext } from 'vuex';
import { ISignInModalState } from './state';
export interface ISignInModalResponse {}

export interface ISignInModalActions {
  openLoginModal(context: ActionContext<ISignInModalState, ISignInModalState>): void;
  closeLoginModal(context: ActionContext<ISignInModalState, ISignInModalState>): void;
  saveUserInStorage({ commit }, userData: any): any;
  logoutUser(context: ActionContext<ISignInModalState, ISignInModalState>): void;
}

export const SignInModalActions: ISignInModalActions = {
  openLoginModal({ commit }: ActionContext<ISignInModalState, ISignInModalState>) {
    commit('SET_IS_OPEN', true);
  },
  closeLoginModal({ commit }: ActionContext<ISignInModalState, ISignInModalState>) {
    commit('SET_IS_OPEN', false);
  },
  saveUserInStorage({ commit }, userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
    commit('SET_USER_DATA', userData);
  },
  logoutUser({ commit }: ActionContext<ISignInModalState, ISignInModalState>): void {
    localStorage.removeItem('userData');
    commit('SET_USER_DATA', null);
  }
};
