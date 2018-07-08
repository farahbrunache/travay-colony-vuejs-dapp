import { ActionContext } from 'vuex';
import { ISigninState } from './state';
import { HttpService } from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface ISigninResponse {}

export interface ISigninActions {
  saveUserInStorage({ commit: any }, userData): any;

  logoutUser(context: ActionContext<ISigninState>): void;
}

export const SigninActions: ISigninActions = {
  saveUserInStorage({ commit }, userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
    commit('SET_USER_DATA', userData);
  },
  logoutUser({ commit }: ActionContext<ISigninState>): void {
    localStorage.removeItem('userData');
    commit('SET_USER_DATA', null);
  }
};
