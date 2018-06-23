import { ActionContext } from 'vuex';
import { IWalletState } from './state';
import { HttpService }   from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface IWalletResponse {
  count: number;
}

export interface IWalletActions {
  increment(context: ActionContext<IWalletState, IWalletState>): Promise<any>;

  decrement(context: ActionContext<IWalletState, IWalletState>): Promise<any>;
}

export const WalletActions: IWalletActions = {
  increment({ commit, state }: ActionContext<IWalletState, IWalletState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
    .put('/counter/increment', { count: state.count })
    .then((res: AxiosResponse<IWalletResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    })
    .catch(() => {
      commit('SET_INCREMENT_PENDING', false);
    });
  },
  decrement({ commit, state }: ActionContext<IWalletState, IWalletState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
    .put('/counter/decrement', { count: state.count })
    .then((res: AxiosResponse<IWalletResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    })
    .catch(() => commit('SET_DECREMENT_PENDING', false));
  },
};
