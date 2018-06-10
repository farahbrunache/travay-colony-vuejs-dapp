import { ActionContext } from 'vuex';
import { IJobsState } from './state';
import { HttpService }   from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface IJobsResponse {
  count: number;
}

export interface IJobsActions {
  increment(context: ActionContext<IJobsState, IJobsState>): Promise<any>;

  decrement(context: ActionContext<IJobsState, IJobsState>): Promise<any>;
}

export const JobsActions: IJobsActions = {
  increment({ commit, state }: ActionContext<IJobsState, IJobsState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
    .put('/counter/increment', { count: state.count })
    .then((res: AxiosResponse<IJobsResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    })
    .catch(() => {
      commit('SET_INCREMENT_PENDING', false);
    });
  },
  decrement({ commit, state }: ActionContext<IJobsState, IJobsState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
    .put('/counter/decrement', { count: state.count })
    .then((res: AxiosResponse<IJobsResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    })
    .catch(() => commit('SET_DECREMENT_PENDING', false));
  },
};
