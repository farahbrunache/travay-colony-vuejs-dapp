import { ActionContext } from 'vuex';
import { IBalanceState } from './state';
import { HttpService }   from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface IBalanceResponse {
  count: number;
}

export interface IBalanceActions {
  increment(context: ActionContext<IBalanceState, IBalanceState>): Promise<any>;

  decrement(context: ActionContext<IBalanceState, IBalanceState>): Promise<any>;
}

export const BalanceActions: IBalanceActions = {
  increment({ commit, state }: ActionContext<IBalanceState, IBalanceState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
    .put('/counter/increment', { count: state.count })
    .then((res: AxiosResponse<IBalanceResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    })
    .catch(() => {
      commit('SET_INCREMENT_PENDING', false);
    });
  },
  decrement({ commit, state }: ActionContext<IBalanceState, IBalanceState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
    .put('/counter/decrement', { count: state.count })
    .then((res: AxiosResponse<IBalanceResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    })
    .catch(() => commit('SET_DECREMENT_PENDING', false));
  },
};
