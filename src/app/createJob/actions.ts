import { ActionContext } from 'vuex';
import { ICreateJobState } from './state';
import { HttpService }   from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface ICreateJobResponse {
  count: number;
}

export interface ICreateJobActions {
  increment(context: ActionContext<ICreateJobState, ICreateJobState>): Promise<any>;

  decrement(context: ActionContext<ICreateJobState, ICreateJobState>): Promise<any>;
}

export const CreateJobActions: ICreateJobActions = {
  increment({ commit, state }: ActionContext<ICreateJobState, ICreateJobState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
    .put('/counter/increment', { count: state.count })
    .then((res: AxiosResponse<ICreateJobResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    })
    .catch(() => {
      commit('SET_INCREMENT_PENDING', false);
    });
  },
  decrement({ commit, state }: ActionContext<ICreateJobState, ICreateJobState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
    .put('/counter/decrement', { count: state.count })
    .then((res: AxiosResponse<ICreateJobResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    })
    .catch(() => commit('SET_DECREMENT_PENDING', false));
  },
};
