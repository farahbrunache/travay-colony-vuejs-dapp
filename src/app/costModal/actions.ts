import { ActionContext } from 'vuex';
import { ICostModalState } from './state';
import { HttpService }   from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface ICostModalResponse {
  count: number;
}

export interface ICostModalActions {
  increment(context: ActionContext<ICostModalState, ICostModalState>): Promise<any>;

  decrement(context: ActionContext<ICostModalState, ICostModalState>): Promise<any>;
}

export const CostModalActions: ICostModalActions = {
  increment({ commit, state }: ActionContext<ICostModalState, ICostModalState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
    .put('/counter/increment', { count: state.count })
    .then((res: AxiosResponse<ICostModalResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    })
    .catch(() => {
      commit('SET_INCREMENT_PENDING', false);
    });
  },
  decrement({ commit, state }: ActionContext<ICostModalState, ICostModalState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
    .put('/counter/decrement', { count: state.count })
    .then((res: AxiosResponse<ICostModalResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    })
    .catch(() => commit('SET_DECREMENT_PENDING', false));
  },
};
