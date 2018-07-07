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
  increment(
    context: ActionContext<ISignInModalState, ISignInModalState>
  ): Promise<any>;

  decrement(
    context: ActionContext<ISignInModalState, ISignInModalState>
  ): Promise<any>;
}

export const SignInModalActions: ISignInModalActions = {
  openLoginModal({ commit }: ActionContext<ISignInModalState>) {
    commit('SET_IS_OPEN', true);
  },
  closeLoginModal({ commit }: ActionContext<ISingInModalState>) {
    commit('SET_IS_OPEN', false);
  },
  increment({
    commit,
    state
  }: ActionContext<ISignInModalState, ISignInModalState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService.put('/counter/increment', { count: state.count })
      .then((res: AxiosResponse<ISignInModalResponse>) => {
        commit('SET_COUNT', res.data.count);
        commit('SET_INCREMENT_PENDING', false);
      })
      .catch(() => {
        commit('SET_INCREMENT_PENDING', false);
      });
  },
  decrement({
    commit,
    state
  }: ActionContext<ISignInModalState, ISignInModalState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService.put('/counter/decrement', { count: state.count })
      .then((res: AxiosResponse<ISignInModalResponse>) => {
        commit('SET_COUNT', res.data.count);
        commit('SET_DECREMENT_PENDING', false);
      })
      .catch(() => commit('SET_DECREMENT_PENDING', false));
  }
};
