import { ActionContext } from 'vuex';
import { ISignInModalState } from './state';
import { HttpService } from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';
export interface ISignInModalResponse {
  count: number;
}

export interface ISignInModalActions {
  openLoginModal(context: ActionContext<ISignInModalState>): void;
  closeLoginModal(context: ActionContent<ISignInModalState>): void;
}

export const SignInModalActions: ISignInModalActions = {
  openLoginModal({ commit }: ActionContext<ISignInModalState>) {
    commit('SET_IS_OPEN', true);
  },
  closeLoginModal({ commit }: ActionContext<ISingInModalState>) {
    commit('SET_IS_OPEN', false);
  }
};
